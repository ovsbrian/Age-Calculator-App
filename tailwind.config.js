/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};
