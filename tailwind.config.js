/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#1da3d8",
      orange: "#fc993e",
      green: "#86ac53",
      // purple: "#cdb4db",
      purple: "#151818",
      lilac: "#dbcaea",
      violet: "#473851",
      white: "#ffffff",
      magenta: "#ac82d1"
    },
    extend: {
      fontFamily: {
        header: ["Pilot, sans-serif"],
        arabic: ["Rakkas, sans-serif"],
      },
    },
  },
  plugins: [],
};
