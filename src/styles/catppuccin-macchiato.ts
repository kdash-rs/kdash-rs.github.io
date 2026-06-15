// Catppuccin Macchiato palette — https://catppuccin.com/palette
//
// This file is the single source of truth for the site's colors. It mirrors
// the palette used by KDash's TUI (default theme = Macchiato), so the tool
// and marketing surface feel like one product.
//
// Every Tailwind color class on the site must resolve through this map; do
// not introduce ad-hoc hex values in components or styles.

export const macchiato = {
  // Surfaces (darkest → lightest)
  base: "#24273a",
  mantle: "#1e2030",
  crust: "#181926",
  surface0: "#363a4f",
  surface1: "#494d64",
  surface2: "#5b6078",

  // Overlays (subtle UI / dividers)
  overlay0: "#6e738d",
  overlay1: "#8087a2",
  overlay2: "#939ab7",

  // Text + subtext
  text: "#cad3f5",
  subtext0: "#a5adcb",
  subtext1: "#b8c0e0",

  // Accents
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
} as const;

export type MacchiatoColor = keyof typeof macchiato;
