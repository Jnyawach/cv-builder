/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'source':['"Source Sans 3"','sans-serif'],
        'roboto':['Roboto','sans-serif'],
        'raleway':['Raleway','sans-serif']


      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

