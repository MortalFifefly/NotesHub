/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "sans-serif"],
        Teko: ["Teko", "sans-serif"],
      },
      dropShadow:{
        'gl': '0 0 10px #bae6fd80',
      },
      fontSize: {
        "3.5xl": "2rem",
      },
      textShadow: {
        "tgl": "0 0 10px #bae6fd",
      },
    },
  },
  plugins: [],
};
