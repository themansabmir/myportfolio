/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#0a0a0c",
        hoverYellow: "#ff4500",
        fontPrimary: "#ffffff",
        fontPara: "#68727D",
        creamBg: "#f5f2eb",
        butterscoth: "#f8dbc1",
      },
      fontFamily: {
        primaryFont: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// "#ffd500",