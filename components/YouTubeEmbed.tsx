"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pzn-youtube-erlaubt";

/**
 * YouTube-Video als Zwei-Klick-Loesung.
 *
 * Ein eingebettetes YouTube-Video kontaktiert beim Seitenaufruf Google,
 * uebertraegt die IP des Besuchers und setzt Cookies. Ohne Einwilligung ist
 * das in der EU angreifbar. Daher laedt hier zunaechst nichts von Google, auch
 * kein Vorschaubild. Erst der Klick startet die Einbettung, und zwar ueber
 * youtube-nocookie.com, das weniger Daten erhebt.
 *
 * Die Zustimmung merkt sich der Browser lokal, damit Wiederkehrer nicht jedes
 * Mal neu klicken muessen. Der Wert verlaesst das Geraet nie.
 */
export default function YouTubeEmbed({
  id,
  title,
  hochformat = false,
}: {
  id: string;
  title: string;
  /** YouTube Shorts sind 9:16. Ohne das stuende das Video in einem
   *  16:9-Rahmen mit breiten schwarzen Balken links und rechts. */
  hochformat?: boolean;
}) {
  const rahmen = hochformat ? "aspect-[9/16]" : "aspect-video";
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "ja") setGeladen(true);
    } catch {
      // Privater Modus oder blockierter Speicher: dann eben jedes Mal fragen.
    }
  }, []);

  function videoLaden() {
    setGeladen(true);
    try {
      localStorage.setItem(STORAGE_KEY, "ja");
    } catch {
      // Nicht schlimm, das Video laeuft trotzdem.
    }
  }

  return (
    <div
      className={`overflow-hidden rounded-card border border-line bg-black shadow-lg2 ${
        hochformat ? "mx-auto max-w-[400px]" : ""
      }`}
    >
      {geladen ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={`block w-full border-0 ${rahmen}`}
        />
      ) : (
        <div className={`flex w-full flex-col items-center justify-center gap-3 bg-sand2 px-6 text-center ${rahmen}`}>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-green text-white">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="ml-0.5 h-6 w-6"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="max-w-[48ch] text-[14.5px] leading-[1.5] text-muted">
            Das Video wird von YouTube geladen. Dabei werden Cookies gesetzt und
            Ihre IP-Adresse an Google übertragen. Erst Ihr Klick startet das.
          </p>
          <button
            type="button"
            onClick={videoLaden}
            className="rounded-btn bg-green px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-greenDark"
          >
            Video laden
          </button>
        </div>
      )}
    </div>
  );
}
