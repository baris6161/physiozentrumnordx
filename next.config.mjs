/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Moderne, kleinere Bildformate automatisch ausliefern
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Bilder und statische Assets lange und unveraenderlich cachen
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Sinnvolle Sicherheits-Header (kosten keine Performance)
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Verhindert, dass die Seite in einen fremden Rahmen gesetzt wird
          // (Clickjacking). frame-ancestors unten ist der moderne Weg, dieser
          // Header deckt aeltere Browser ab.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            // Genau auf das zugeschnitten, was die Seite tatsaechlich laedt:
            //   script/style  'unsafe-inline' ist noetig, weil Next.js seinen
            //                 Bootstrap inline einbettet (ohne Nonce-Setup)
            //   va.vercel-scripts.com  von dort laden Vercel Analytics und
            //                 Speed Insights ihr Messskript. Ohne diesen
            //                 Eintrag blockt die CSP beide.
            //   media-src     die beiden Geraetevideos aus /public/videos
            //   frame-src     nur google.com fuer die Karte, und die laedt
            //                 ohnehin erst nach ausdruecklicher Zustimmung
            //   connect-src   dorthin melden die beiden Dienste ihre Messwerte
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "media-src 'self'",
              "frame-src https://www.google.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "form-action 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
  // Hinweis: Die 301-Redirects der alten grossgeschriebenen URLs
  // (/Jobs, /Krankengymnastik) laufen ueber middleware.ts mit exaktem,
  // case-sensitivem Abgleich. next.config-redirects matchen case-insensitiv
  // und wuerden sonst die Kleinschreibung auf sich selbst umleiten (Schleife).
};

export default nextConfig;
