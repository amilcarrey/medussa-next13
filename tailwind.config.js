/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms')
// const typography = require('@tailwindcss/typography')
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['var(--font-sans)']
         },
      },
   },
   plugins: [forms],
}
