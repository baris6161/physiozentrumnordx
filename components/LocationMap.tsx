"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Pin } from "./Icons";

const STORAGE_KEY = "pzn-karte-erlaubt";

/**
 * Standortkarte im Kontaktbereich als Zwei-Klick-Loesung.
 *
 * Die Google-Einbettung setzt Cookies und uebertraegt die IP des Besuchers an
 * Google. Ohne Einwilligung ist das in der EU angreifbar. Daher wird Google
 * erst kontaktiert, wenn der Besucher den Knopf drueckt. Bis dahin laedt die
 * Seite keine einzige fremde Ressource und bleibt vollstaendig cookiefrei.
 *
 * Die einmal erteilte Zustimmung merkt sich der Browser lokal, damit
 * Wiederkehrer nicht jedes Mal neu klicken muessen. Der Wert verlaesst das
 * Geraet nie.
 */
export default function LocationMap() {
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "ja") setGeladen(true);
    } catch {
      // Privater Modus oder blockierter Speicher: dann eben jedes Mal fragen.
    }
  }, []);

  function karteLaden() {
    setGeladen(true);
    try {
      localStorage.setItem(STORAGE_KEY, "ja");
    } catch {
      // Nicht schlimm, die Karte laedt trotzdem.
    }
  }

  return (
    <div className="overflow-hidden rounded-card border border-line">
      {geladen ? (
        <iframe
          title={`Standort ${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`}
          src={site.googleMapsEmbed}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="block h-[300px] w-full border-0"
        />
      ) : (
        <div className="flex h-[300px] flex-col items-center justify-center gap-3 bg-sand2 px-6 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-greenTint text-greenDark">
            <Pin className="h-6 w-6" />
          </span>
          <p className="max-w-[46ch] text-[14.5px] leading-[1.5] text-muted">
            Die Karte wird von Google geladen. Dabei werden Cookies gesetzt und
            Ihre IP-Adresse an Google übertragen. Erst Ihr Klick startet das.
          </p>
          <button
            type="button"
            onClick={karteLaden}
            className="rounded-btn bg-green px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-greenDark"
          >
            Karte laden
          </button>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener"
            className="text-[13.5px] font-semibold text-greenDark underline underline-offset-[3px] hover:text-ink"
          >
            Oder direkt in Google Maps öffnen
          </a>
        </div>
      )}
      <div className="flex items-center justify-between gap-3 bg-sand px-4 py-3 text-[14px]">
        <span className="font-semibold text-ink">
          {site.address.street}, {site.address.zip} {site.address.city}
        </span>
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener"
          className="font-bold text-greenDark hover:text-ink"
        >
          Route planen &rarr;
        </a>
      </div>
    </div>
  );
}
