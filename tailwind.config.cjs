// Tailwind extends colors from the Catppuccin Macchiato palette in
// src/styles/catppuccin-macchiato.ts. The palette tokens are inlined here
// (rather than imported) because tailwind.config.cjs is loaded by Tailwind's
// CommonJS resolver and the palette file is TypeScript ESM.
//
// Macchiato is also KDash's default in-app theme, so the site and the TUI
// share one palette.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        catppuccin: {
          base: "#24273a",
          mantle: "#1e2030",
          crust: "#181926",
          surface0: "#363a4f",
          surface1: "#494d64",
          surface2: "#5b6078",
          overlay0: "#6e738d",
          overlay1: "#8087a2",
          overlay2: "#939ab7",
          text: "#cad3f5",
          subtext0: "#a5adcb",
          subtext1: "#b8c0e0",
          rosewater: "#f4dbd6",
          flamingo: "#f0c6c6",
          pink: "#f5bde6",
          mauve: "#c6a0f6",
          red: "#ed8796",
          maroon: "#ee99a0",
          peach: "#f5a97f",
          yellow: "#eed49f",
          green: "#a6da95",
          teal: "#8bd5ca",
          sky: "#91d7e3",
          sapphire: "#7dc4e4",
          blue: "#8aadf4",
          lavender: "#b7bdf8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrainsMono Nerd Font",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
