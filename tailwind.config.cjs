/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Red Hat Display', 'serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#636262',
        gray: {
          DEFAULT: '#9D9D9D',
          100: '#ECECEC',
          200: '#DCDCDC',
          300: '#C4C4C4',
          400: '#B3B3B3',
          500: '#9D9D9D',
        },
      },
    },
  },
  plugins: [],
};
