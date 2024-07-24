/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "rgba(250, 249, 246, 0.9)",
      },

      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "1025px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1280px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
