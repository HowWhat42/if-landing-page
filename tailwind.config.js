/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      visibility: ['parent'],
      fontFamily: {
        'clash': ['Clash Display'],
        'work': ['Work Sans']
      },
      fontSize: {
        '230': '230px',
        '10xl': '9rem'
      },
      backgroundImage: {
        'main-background': "url('./assets/images/bg.png')"
      },
      height: {
        '50vh': '50vh'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
