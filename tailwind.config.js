/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./componentes/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primario: "#49129C",
        secundario: {
          DEFAULT: "#B40086",
          100: "#C51297",
          200: "#831266",
        },
        terciario: "#EF2967",
      },
      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
