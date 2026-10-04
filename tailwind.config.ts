import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        ink2: "#33372f",
        // Abgedunkeltes Limettengruen in Anlehnung an das Praxislogo.
        // #657a17 erreicht gegen Weiss 4.8:1 und erfuellt damit WCAG AA
        // (4.5:1). Das Logo-Gruen #90aa20 selbst kam nur auf 2.6:1 und
        // war als Text und auf Buttons zu kontrastarm.
        //
        // FRUEHERE STAENDE, falls zurueckgebaut werden soll:
        //   Logo-Limette: green/greenDark #90aa20,
        //                 greenTint #f4f7e8, greenLine #dde7b9
        //   Helles Gruen: green #2B8449, greenDark #1D653B,
        //                 greenTint #edf5ef, greenLine #cce3d4
        //   Ursprung:     green #1D653B, greenDark #164e2d,
        //                 greenTint #eaf1ec, greenLine #c7ddce
        green: "#657a17",
        greenDark: "#4e5e11",
        greenTint: "#f2f5e6",
        greenLine: "#d5dfb0",
        paper: "#ffffff",
        sand: "#F4F6F4",
        sand2: "#eef1ee",
        line: "#e4e8e4",
        muted: "#5b615b",
      },
      fontFamily: {
        heading: ["var(--fh)", "system-ui", "sans-serif"],
        body: ["var(--fb)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
      borderRadius: {
        btn: "10px",
        card: "18px",
        sm2: "9px",
      },
      boxShadow: {
        sm2: "0 1px 2px rgba(26,26,26,.05)",
        md2: "0 14px 34px -18px rgba(26,26,26,.28)",
        lg2: "0 30px 70px -30px rgba(26,26,26,.35)",
      },
      keyframes: {
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(29,101,59,.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(29,101,59,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(29,101,59,0)" },
        },
        ctaGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(29,101,59,.0)" },
          "50%": { boxShadow: "0 0 0 6px rgba(29,101,59,.14)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-out infinite",
        ctaGlow: "ctaGlow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
