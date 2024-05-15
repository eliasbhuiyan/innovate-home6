/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'primary': ['Open Sans', 'sans-serif', ],
    },
    extend: {
      colors: {
        'primary': '#141135',
        'secondary': '#726E9E',
        'brand': '#1BBF00',
      },
    },
  },
  plugins: [],
}