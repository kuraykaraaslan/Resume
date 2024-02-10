/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": ".65rem",
      "xs": ".75rem",
      "sm": ".875rem",
      "tiny": ".875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#c200ff",

          "secondary": "#00cddd",

          "accent": "#007700",

          "neutral": "#0b230e",

          "base-100": "#f8fcff",

          "info": "#00b5cc",

          "success": "#00b165",

          "warning": "#ffdc00",

          "error": "#ff7a8a",
        },

      },
    ],
  },
}


