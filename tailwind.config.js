/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fe624c',
        background: '#f0f2f9',
        secondary: '#6e00ff'
      },
    },
  },
  plugins: [],
}