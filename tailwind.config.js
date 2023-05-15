/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#1c7fb2",
      orange: "#fc993e",
      green: "#86ac53",
      purple: "#cdb4db",
      violet: "#473851"
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
