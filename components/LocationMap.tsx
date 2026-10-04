import { site } from "@/lib/site";

/**
 * Standortkarte im Kontaktbereich. Nutzt die offizielle Google-Maps-Einbettung
 * aus lib/site.ts, damit der Pin exakt auf der Praxis sitzt.
 *
 * DATENSCHUTZ: Google setzt beim Laden Cookies und uebertraegt die IP des
 * Besuchers an Google. Ohne Einwilligung ist das in der EU angreifbar. Wenn ein
 * Consent-Banner unerwuenscht ist, waere eine Zwei-Klick-Loesung die Alternative
 * (Vorschaubild, Karte laedt erst nach Klick).
 */
export default function LocationMap() {
  return (
    <div className="overflow-hidden rounded-card border border-line">
      <iframe
        title={`Standort ${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`}
        src={site.googleMapsEmbed}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="block h-[300px] w-full border-0"
      />
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
