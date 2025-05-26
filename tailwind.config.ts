import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // add the path to the Hero UI theme files
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
        light: {
          // ...
          colors: {
            primary: "#5A827E",
            secondary: "#84AE92",
            success: "B9D4AA",
          },
        },
        dark: {
          // ...
          colors: {
            primary: "#5A827E",
            secondary: "#84AE92",
            success: "B9D4AA",
          },
        },
        // ... custom themes
      },
  })],
};
export default config;
