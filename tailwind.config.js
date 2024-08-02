/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        side: "side 16s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "35%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        side: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "35%": {
            transform: "translate(200px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-200px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        offWhite: "rgba(250, 249, 246, 0.9)",
        offWhite2: "rgba(250, 249, 246, 0.3)",
        titleBlockBg: "rgba(206, 137, 45, 0.8)",

        bookingPageBG: "rgb(21, 21, 21)",
        bookingCard1: "rgba(252, 247, 241, 0.9)",
        bookingCard2: "rgba(255, 200, 61, 0.9)",
        bookingCard3: "rgba(238, 214, 178, 0.9)",
      },

      // screens: {
      //   sm: { max: "767px" },
      //   // => @media (min-width: 640px and max-width: 767px) { ... }

      //   md: { min: "1025px" },
      //   // => @media (min-width: 768px and max-width: 1023px) { ... }

      //   lg: { min: "1280px" },
      //   // => @media (min-width: 1024px and max-width: 1279px) { ... }
      // },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        cooperHeavy: ["CooperHewittHeavy", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
