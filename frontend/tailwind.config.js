/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#4d94ff',
        accent: '#00264d',
        light: '#f5f8fc',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
