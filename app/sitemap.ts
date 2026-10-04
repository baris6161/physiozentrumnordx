import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services, devicesWithPage } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  // Build-Zeitpunkt: aktualisiert sich bei jeder Neuveroeffentlichung automatisch.
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1 },
    ...services.map((s) => ({ path: `/${s.slug}`, priority: 0.8 })),
    ...devicesWithPage.map((d) => ({ path: `/geraete/${d.slug}`, priority: 0.7 })),
    { path: "/patienteninformation", priority: 0.6 },
    { path: "/jobs", priority: 0.6 },
    { path: "/kontakt", priority: 0.7 },
    { path: "/impressum", priority: 0.3 },
    { path: "/datenschutzbestimmungen-nach-dsgvo1", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
