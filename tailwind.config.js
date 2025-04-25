/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#F48B3A',
          600: '#e76c00',
        },
        teal: {
          600: '#16B6BF',
        },
        cream: '#fffaf5',
      },
      fontFamily: {
        brand: ['"Pacifico"', 'cursive'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
