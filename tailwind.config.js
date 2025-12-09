/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: Enables dark mode based on the 'dark' class on the HTML tag
  darkMode: 'class', 
  
  content: [
    // CRITICAL: Tells Tailwind to scan all your component files for classes
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#4F46E5', // Custom accent color
      },
    },
  },
  plugins: [],
}