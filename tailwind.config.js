/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    extend: {
      fontFamily: {
        Proxima700: ['Proxima700'],
        Proxima600: ['Proxima600'],
        Proxima400: ['Proxima400'],
        Proxima300: ['Proxima300'],
        Roboto400: ['Roboto400']
      },
      fontWeight: {
        font500: 300
      }
    },
  },
  plugins: [],
}
