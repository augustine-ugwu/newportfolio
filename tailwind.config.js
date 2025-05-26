// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabinet Grotesk", ...fontFamily.sans],
        display: ["Gambarino", "serif"],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
