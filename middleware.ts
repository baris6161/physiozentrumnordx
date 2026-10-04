import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Alte, grossgeschriebene Duda-URLs -> neue Kleinschreibung (301, Ranking-Erhalt).
// Exakter, case-sensitiver Abgleich, damit die Kleinschreibung NICHT auf sich
// selbst umgeleitet wird (das waere eine Redirect-Schleife).
const REDIRECTS: Record<string, string> = {
  "/Jobs": "/jobs",
  "/Krankengymnastik": "/krankengymnastik",
  // Die Manualtherapie-Seite heisst jetzt nach dem Geraet und liegt unter
  // /manuthera-242. Der alte Slug stammt noch von der Duda-Seite und hat
  // Rankings, die ueber den 301 mituebergehen.
  "/manualtherapie": "/manuthera-242",
  // Kurzzeitig gab es zusaetzlich eine eigene Geraeteseite. Leistung und
  // Geraet sind dieselbe Sache und liegen jetzt zusammen.
  "/geraete/manuthera-242": "/manuthera-242",
};

export function middleware(req: NextRequest) {
  const dest = REDIRECTS[req.nextUrl.pathname];
  if (dest) {
    const url = req.nextUrl.clone();
    url.pathname = dest;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Jobs",
    "/Krankengymnastik",
    "/manualtherapie",
    "/geraete/manuthera-242",
  ],
};
