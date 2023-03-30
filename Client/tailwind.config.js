/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/home-image.jpeg')"
      },
      fontFamily: {
        'sans': ['Avenir', 'Arial', 'sans-serif']
      },
      colors: {
        'theme-blue': '#307BA6',
        'theme-orange':'#E3934C',
        'theme-purple':'#9485CA',
      },
    },
  },
  plugins: [],
}
