import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { deviceBySlug, devicesWithPage } from "@/lib/content";
import DeviceDetail from "@/components/DeviceDetail";
import BackToHome from "@/components/BackToHome";

type Props = { params: Promise<{ slug: string }> };

/** Alle Geraeteseiten werden zur Buildzeit statisch erzeugt. */
export function generateStaticParams() {
  return devicesWithPage.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const device = deviceBySlug(slug);
  if (!device) return {};
  return {
    title: device.metaTitle,
    description: device.metaDescription,
    alternates: { canonical: `/geraete/${device.slug}` },
    openGraph: {
      title: device.metaTitle,
      description: device.metaDescription,
      images: [{ url: device.img }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const device = deviceBySlug(slug);
  // Ohne eigene Seite (z. B. BodyVibe) gilt der Slug hier nicht.
  if (!device || !device.ownPage) notFound();

  return (
    <>
      <div className="bg-sand pt-1">
        <BackToHome />
      </div>
      <DeviceDetail device={device} />
    </>
  );
}
