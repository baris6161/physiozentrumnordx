// Zentrale Praxis- und Kontaktdaten (NAP). Einmal pflegen, ueberall nutzen.

export const site = {
  name: "Physiotherapie Zentrum Nord",
  owner: "Tareck Fares",
  taxId: "26/112/10076",
  phoneDisplay: "0511 713 03 044",
  phoneFormal: "+49 (0)511 / 713 03 044",
  phoneHref: "tel:+4951171303044",
  email: "info@krankengymnastik-in-hannover.de",
  emailHref: "mailto:info@krankengymnastik-in-hannover.de",
  address: {
    street: "Voßstr. 1",
    zip: "30161",
    city: "Hannover",
    district: "List",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Physiotherapie+Zentrum+Nord+Vo%C3%9Fstr.+1+30161+Hannover",
  // Offizielle Google-Maps-Einbettung (korrekter Standort-Pin).
  // Wird im Kontaktbereich gerendert, siehe components/LocationMap.tsx.
  // HINWEIS: Google setzt dabei Cookies und laedt Inhalte von Google-Servern.
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.024959671598!2d9.735147176956394!3d52.388097845986564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41653bd4764c4235%3A0x9d05a3e363103a6f!2sPhysiotherapie%20Zentrum%20Nord!5e0!3m2!1sde!2sde!4v1791147437804!5m2!1sde!2sde",
  social: {
    facebook: "https://www.facebook.com/PhysiotherapieZentrumNord/",
    instagram: "https://www.instagram.com/physiozentrumnord/",
  },
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.krankengymnastik-in-hannover.de",
} as const;

export const hours = [
  { d: "Montag bis Donnerstag", t: "8:00 bis 20:00 Uhr" },
  { d: "Freitag", t: "8:00 bis 14:00 Uhr" },
  { d: "Samstag", t: "nach Vereinbarung" },
  { d: "Sonntag", t: "geschlossen" },
];

// Kurzfassung fuer den Hero-Chip. Stand vorher fest in app/page.tsx und nannte
// nur Montag bis Donnerstag, was sich wie "freitags geschlossen" liest.
// Hier pflegen, damit Hero und Kontaktbereich nicht auseinanderlaufen.
export const hoursShort = "Mo bis Fr ab 8 Uhr";

// Hauptnavigation. Anker-Links (/#...) springen auf der Startseite sanft
// zur Sektion, von Unterseiten navigieren sie zuerst zur Startseite.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Therapiegeräte", href: "/#therapiegeraete" },
  { label: "Patienteninfo", href: "/patienteninformation" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/#kontakt" },
];
