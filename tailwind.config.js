/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {Inter: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']},
  },
  plugins: [],
}