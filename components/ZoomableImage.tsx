"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFocusTrap } from "@/lib/useFocusTrap";

/**
 * Einzelbild, das sich per Klick im Vollbild oeffnet.
 *
 * Das Overlay haengt per Portal an document.body. Grund: Die Bilder der
 * Unterseiten stecken in einem <Reveal>, und .reveal traegt
 * will-change: transform. Ein solches Element wird zum Bezugsrahmen fuer alle
 * Nachfahren mit position: fixed, dauerhaft und nicht nur waehrend der
 * Animation. Ohne Portal wuerde sich das Vollbild am Bildkasten ausrichten
 * statt am Bildschirm, genau wie es vorher in der Galerie passiert ist.
 */
export default function ZoomableImage({
  src,
  alt,
  imgClassName,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  imgClassName: string;
  sizes: string;
  priority?: boolean;
}) {
  const [offen, setOffen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(offen, overlayRef);

  const schliessen = useCallback(() => setOffen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!offen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") schliessen();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [offen, schliessen]);

  useEffect(() => {
    document.body.style.overflow = offen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [offen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOffen(true)}
        aria-label={`${alt} vergrößern`}
        className="group absolute inset-0 cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`${imgClassName} transition-transform duration-300 group-hover:scale-[1.02]`}
        />
      </button>

      {mounted &&
        offen &&
        createPortal(
          <div
            ref={overlayRef}
            tabIndex={-1}
            onClick={schliessen}
            className="fixed inset-0 z-[90] grid place-items-center bg-ink/95 p-0 outline-none sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                schliessen();
              }}
              aria-label="Schließen"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
            >
              ✕
            </button>

            {/* Alle Bilder liegen im Format 16:9 vor. Dadurch umschliesst der
                Rahmen das Bild genau: ein Klick daneben trifft den Hintergrund
                und schliesst, ein Klick aufs Bild nicht. */}
            <div
              className="relative aspect-video max-h-[90vh] w-full max-w-full sm:max-w-[94vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                priority
                className="select-none rounded-xl object-contain shadow-lg2"
                draggable={false}
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[13px] text-white/70">
              Zum Schließen tippen
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
