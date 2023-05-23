/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "1.5rem",
      full: "100px",
    },
    extend: {
      spacing: {
        128: "30rem",
      },

      fontWeight: {
        "poppins-regular": 400,
        "poppins-bold": 700,
        "poppins-extrabold": 800,
      },
    },
  },
  plugins: [],
};
