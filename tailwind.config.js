/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Deep Navy
        secondary: "#fbbf24", // Amber/Gold
        accent: "#64ffda", // Teal
        neutral: "#8892b0", // Slate
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
};
