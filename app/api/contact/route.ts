import { NextResponse } from "next/server";
import { brandedHtml, sendMail } from "@/lib/mail";
import { filledTooFast, getClientIp, rateLimited, tooLong } from "@/lib/formGuard";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message, consent, company, ts } = body ?? {};

    // Honeypot: Bots fuellen dieses Feld aus
    if (company) return NextResponse.json({ ok: true });

    // Zeit-Falle: zu schnell (oder ohne Zeitstempel) = Bot. Still bestaetigen,
    // damit der Bot keinen Fehler zum Nachbessern bekommt.
    if (filledTooFast(ts)) return NextResponse.json({ ok: true });

    // Rate-Limit pro IP (Best-Effort, siehe lib/formGuard.ts)
    if (rateLimited(getClientIp(req))) {
      return NextResponse.json(
        { ok: false, error: "Zu viele Anfragen. Bitte versuchen Sie es in einigen Minuten erneut." },
        { status: 429 },
      );
    }

    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { ok: false, error: "Bitte fuellen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }
    if (
      tooLong(name, 100) ||
      tooLong(email, 150) ||
      tooLong(phone, 40) ||
      tooLong(message, 5000)
    ) {
      return NextResponse.json(
        { ok: false, error: "Ihre Eingabe ist zu lang." },
        { status: 400 },
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) {
      return NextResponse.json(
        { ok: false, error: "Bitte geben Sie eine gueltige E-Mail-Adresse an." },
        { status: 400 },
      );
    }

    const rows: Array<[string, string]> = [
      ["Name", String(name)],
      ["E-Mail", String(email)],
      ["Telefon", phone ? String(phone) : "nicht angegeben"],
      ["Nachricht", String(message)],
    ];

    await sendMail({
      subject: `Neue Terminanfrage von ${name}`,
      html: brandedHtml(
        "Neue Terminanfrage über das Kontaktformular",
        "Über das Kontaktformular ist eine neue Anfrage eingegangen:",
        rows,
      ),
      text: `Neue Terminanfrage\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${
        phone || "nicht angegeben"
      }\nNachricht:\n${message}`,
      replyTo: String(email),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error", err);
    return NextResponse.json(
      { ok: false, error: "Interner Fehler beim Versand." },
      { status: 500 },
    );
  }
}
