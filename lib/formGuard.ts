// Best-Effort-Schutz gegen Formular-Spam und Flooding.
//
// WICHTIG: Das IP-Rate-Limit haelt seinen Zaehler nur im Arbeitsspeicher der
// jeweiligen Serverless-Instanz. Es faengt schnelle Wiederholungen aus einer
// warmen Instanz zuverlaessig ab, ist aber NICHT kaltstart- oder
// instanzuebergreifend garantiert. Fuer harte Garantien spaeter einen
// persistenten Store nachruesten (z. B. Vercel KV / Upstash Redis).
//
// Zusammen mit dem Honeypot (leeres "company"-Feld) und der Zeit-Falle
// (Formular in unter MIN_FILL_MS abgeschickt = Bot) ergibt das einen soliden
// Grundschutz ohne externe Abhaengigkeit.

const WINDOW_MS = 10 * 60 * 1000; // 10 Minuten
const MAX_PER_WINDOW = 5; // pro IP im Zeitfenster
const MIN_FILL_MS = 3000; // schneller ausgefuellt = Bot

const hits = new Map<string, number[]>();

/** Ermittelt die Client-IP aus den ueblichen Proxy-Headern. */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/** true, wenn diese IP das Limit im aktuellen Zeitfenster ueberschreitet. */
export function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Gelegentliches Aufraeumen, damit die Map nicht unbegrenzt waechst.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

/**
 * true, wenn das Formular verdaechtig schnell (oder ganz ohne Zeitstempel)
 * abgeschickt wurde. Ein direkter Bot-POST enthaelt kein "ts" und faellt so auf.
 */
export function filledTooFast(ts: unknown): boolean {
  const n = Number(ts);
  if (!Number.isFinite(n) || n <= 0) return true;
  return Date.now() - n < MIN_FILL_MS;
}

/** true, wenn ein Textwert das erlaubte Maximum ueberschreitet. */
export function tooLong(value: unknown, max: number): boolean {
  return typeof value === "string" && value.length > max;
}
