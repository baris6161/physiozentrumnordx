import Link from "next/link";
import Image from "next/image";
import {
  type Device,
  devicesWithPage,
  deviceHref,
  serviceBySlug,
} from "@/lib/content";
import { site } from "@/lib/site";
import { container, btnPrimary, btnSecondary, focusClass } from "@/lib/ui";
import Reveal from "./Reveal";
import ZoomableImage from "./ZoomableImage";
import { ArrowRight, Check, Spark } from "./Icons";

/**
 * Detailseite eines Therapiegeraets unter /geraete/<slug>.
 * Aufbau bewusst nah an ServiceDetail, damit sich die Seiten gleich anfuehlen.
 */
export default function DeviceDetail({ device }: { device: Device }) {
  const heroImg =
    device.fit === "contain"
      ? "object-contain bg-white p-6"
      : `object-cover ${focusClass(device.focus)}`;
  const service = serviceBySlug(device.serviceSlug);
  const others = devicesWithPage.filter((d) => d.slug !== device.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-sand">
        <div className={`${container} pt-2`}>
          <nav className="flex flex-wrap items-center gap-2 py-3 text-[14px] text-muted">
            <Link href="/" className="hover:text-greenDark">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <Link href="/#therapiegeraete" className="hover:text-greenDark">
              Therapiegeräte
            </Link>
            <span className="opacity-60">/</span>
            <span className="font-semibold text-ink">{device.name}</span>
          </nav>
        </div>
        <div
          className={`${container} flex flex-wrap items-center gap-8 pb-12 pt-4 md:gap-14 md:pb-16`}
        >
          <div className="min-w-[290px] flex-1 basis-[380px]">
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-greenLine bg-greenTint px-3 py-1.5 text-[13px] font-bold text-greenDark">
                {device.tag}
              </span>
              <h1 className="text-[clamp(2.3rem,4.6vw,3.6rem)] font-extrabold">
                {device.name}
              </h1>
              <p className="mt-5 max-w-[42ch] text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink2">
                {device.lead}
              </p>
              {/* Auf Mobile uebernimmt die feste Anrufen/Termin-Leiste unten,
                  daher Hero-CTAs erst ab Desktop (lg) zeigen. */}
              <div className="mt-7 hidden flex-wrap gap-3 lg:flex">
                <Link href="/#kontakt" className={btnPrimary}>
                  Termin vereinbaren <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={site.phoneHref} className={btnSecondary}>
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="min-w-[290px] flex-1 basis-[360px]">
            <Reveal delay={80}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-sand2 shadow-lg2">
                <ZoomableImage
                  src={device.img}
                  alt={device.name}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  imgClassName={heroImg}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* So arbeitet das Geraet + Nutzen */}
      <section className="bg-paper">
        <div className={`${container} flex flex-wrap gap-8 py-14 md:gap-16 md:py-20`}>
          <div className="min-w-[300px] flex-[2] basis-[440px]">
            <Reveal>
              <h2 className="mb-5 text-[clamp(1.6rem,2.6vw,2.1rem)]">
                So arbeitet das Gerät
              </h2>
              <div className="flex flex-col gap-4 text-[1.08rem] leading-[1.72] text-ink2">
                {device.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            {service && (
              <Reveal delay={60}>
                <Link
                  href={`/${service.slug}`}
                  className="mt-7 flex items-start gap-4 rounded-card border border-greenLine bg-greenTint px-6 py-5 transition-colors hover:border-green"
                >
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-green text-white">
                    <Spark className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-greenDark">
                      Eingesetzt bei
                    </div>
                    <p className="mt-1.5 font-semibold text-ink">
                      {service.name}{" "}
                      <span className="font-bold text-greenDark">
                        Zur Leistung &rarr;
                      </span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            )}
          </div>

          <aside className="min-w-[260px] flex-1 basis-[280px]">
            <Reveal delay={80}>
              <div className="rounded-card border border-line bg-sand p-6">
                <h3 className="mb-4 text-[1.15rem]">Nutzen</h3>
                <div className="flex flex-col gap-3">
                  {device.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-[15px] leading-[1.45]"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {device.indications && device.indications.length > 0 && (
              <Reveal delay={120}>
                <div className="mt-5 rounded-card border border-greenLine bg-greenTint p-6">
                  <h3 className="mb-1 text-[1.15rem]">Wobei es hilft</h3>
                  <p className="mb-4 text-[14px] text-muted">
                    Beschwerdebilder, bei denen wir das Gerät einsetzen
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {device.indications.map((ind, i) => (
                      <li
                        key={i}
                        className="rounded-full border border-greenLine bg-white px-3 py-1.5 text-[14px] font-semibold text-ink"
                      >
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </section>

      {/* Video, falls hinterlegt. Lokal ausgeliefert statt per YouTube-Embed,
          damit die Seite cookiefrei bleibt und kein Consent noetig wird. */}
      {device.video && (
        <section className="bg-sand">
          <div className={`${container} py-14 md:py-16`}>
            <Reveal>
              <h2 className="mb-2 text-[clamp(1.5rem,2.4vw,2rem)]">
                Das Gerät im Einsatz
              </h2>
              <p className="mb-7 max-w-[55ch] text-[1.05rem] text-muted">
                Kurzes Video des Herstellers. So läuft eine Behandlung ab.
              </p>
              <div className="overflow-hidden rounded-card border border-line bg-black shadow-lg2">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={device.img}
                  className="block aspect-video w-full"
                >
                  <source src={device.video} type="video/mp4" />
                  Ihr Browser kann dieses Video nicht abspielen.
                </video>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Weitere Geraete */}
      <section className="bg-paper">
        <div className={`${container} py-14 md:py-16`}>
          <Reveal>
            <h2 className="mb-7 text-[clamp(1.5rem,2.4vw,2rem)]">
              Weitere Therapiegeräte
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70} className="h-full">
                <Link
                  href={deviceHref(d)}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm2 transition duration-200 hover:-translate-y-1 hover:shadow-md2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className={
                        d.fit === "contain"
                          ? "object-contain p-3"
                          : `object-cover ${focusClass(d.focus)} transition-transform duration-300 group-hover:scale-[1.04]`
                      }
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-greenDark">
                      {d.tag}
                    </div>
                    <h3 className="mt-1.5 text-[1.15rem]">{d.name}</h3>
                    <span className="mt-2.5 inline-flex items-center gap-1 text-[14px] font-bold text-greenDark">
                      Ansehen <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
