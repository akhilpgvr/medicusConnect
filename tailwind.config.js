/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#65a30d",
        'secondary': "#f1f5f9"
      }
    },
  },
  plugins: [],
}