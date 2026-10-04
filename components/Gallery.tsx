"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/lib/content";
import { useFocusTrap } from "@/lib/useFocusTrap";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(active !== null, overlayRef);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) {
      if (dx < 0) next();
      else prev();
    }
    touchX.current = null;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.img}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${g.alt} vergrößern`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-sand2 shadow-sm2"
          >
            <Image
              src={g.img}
              alt={g.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          ref={overlayRef}
          tabIndex={-1}
          onClick={close}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink/95 p-0 outline-none sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].alt}
        >
          {/* Schließen */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Schließen"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
          >
            ✕
          </button>

          {/* Zurück */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 sm:left-6"
          >
            ‹
          </button>

          {/* Weiter */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 sm:right-6"
          >
            ›
          </button>

          {/* Das Bild laeuft ueber next/image statt ueber ein rohes img-Tag.
              Vorher wurde die Originaldatei aus /images geladen, also 200 bis
              350 KB JPEG ohne jede Optimierung. Jetzt liefert der Optimizer
              AVIF beziehungsweise WebP in Bildschirmgroesse, was den Download
              deutlich verkleinert und das Oeffnen spuerbar beschleunigt.

              Alle Galeriebilder sind 16:9. Durch aspect-video ist der Rahmen
              genau so gross wie das Bild. Ein Klick daneben trifft den
              Hintergrund und schliesst, ein Klick aufs Bild nicht. */}
          <div
            className="relative aspect-video max-h-[90vh] w-full max-w-full sm:max-w-[94vw]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={gallery[active].img}
              alt={gallery[active].alt}
              fill
              sizes="100vw"
              priority
              className="select-none rounded-xl object-contain shadow-lg2"
              draggable={false}
            />
          </div>

          {/* Nachbarbilder unsichtbar vorladen, damit das Blaettern sofort
              reagiert statt bei jedem Wisch neu zu laden. */}
          <div aria-hidden className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
            {[
              (active + 1) % gallery.length,
              (active - 1 + gallery.length) % gallery.length,
            ].map((i) => (
              <Image
                key={gallery[i].img}
                src={gallery[i].img}
                alt=""
                width={16}
                height={9}
                sizes="100vw"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[13px] text-white/70">
            {active + 1} / {gallery.length} · zum Blättern wischen
          </div>
        </div>
      )}
    </>
  );
}
