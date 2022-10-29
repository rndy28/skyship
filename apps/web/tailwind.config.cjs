/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manjari: ['"Manjari"', "sans-seriff"],
        manrope: ['"Manrope"', "sans-seriff"],
      },
      colors: {
        primary: {
          100: "#ecedfb",
          200: "#d9daf7",
          300: "#c6c8f3",
          400: "#b3b5ef",
          500: "#a0a3eb",
          600: "#8d90e7",
          700: "#7a7ee3",
          800: "#676bdf",
          900: "#5459db",
          DEFAULT: "#4146d7",
        },
      },
      screens: {
        "2md": "900px",
        "2xl": "1330px",
        "3xl": "1400px",
      },
      minHeight: {
        inherit: "inherit",
      },
      height: {
        inherit: "inherit",
      },
      minWidth: {
        inherit: "inherit",
      },
      width: {
        inherit: "inherit",
      },
      boxShadow: {
        "1xl": "rgba(0, 0, 0, 0.1) 0px 8px 30px",
        "2xl": "rgba(17, 12, 46, 0.25) 0px 48px 100px 0px",
        "3xl": "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        "4xl": "rgba(17, 12, 46, 0.15) 0px 10px 100px 0px",
      },
    },
  },
  plugins: [],
};
