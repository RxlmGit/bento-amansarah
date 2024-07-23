/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
    },
  },
  plugins: [],
};
