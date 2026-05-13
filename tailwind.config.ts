import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0F",
        bone: "#F4F1EB",
        rabbit: "#B23A2A",
        stone: "#6F6A62",
        surface: "#17171A",
        hairline: "#2A2A2D",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.5rem, 6vw + 1rem, 6rem)",
        "fluid-h1": "clamp(2rem, 4vw + 0.5rem, 4.5rem)",
        "fluid-h2": "clamp(1.5rem, 2.5vw + 0.5rem, 3rem)",
      },
      maxWidth: {
        prose: "65ch",
        container: "1280px",
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
