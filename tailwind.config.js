/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}", // Add your custom extensions here
  ],
  theme: {
    extend: {},
  },
  plugins: [scrollbar()],
};
