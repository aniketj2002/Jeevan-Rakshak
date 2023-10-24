/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1080px',
      'max-lg': { 'max': '1080px' },
      'max-m':{'max':'800px'},
      'full-site':{'max':'1300px'}
    },
    extend: {
      fontFamily: {
        mullish: ["Mulish ", "sans-serif"],
      },
      colors: {
        bgBlue: "#bcdaf7",
        bgBlueShadow: "#e4f0fe",
        btnBlue: "#030448",
        textGrey: "#9b9a9b",
        textBlue: "#1d8cf4",
        lightBlue: "#2585E2",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
      },
      keyframes: {
        notebook: {
          '0%, 100%': { transform: 'translatex(-5%) translatey(5%)' },
          '50%': { transform: 'translatex(5%) translatey(-5%)' },
        },
        hero: {
          '0%, 100%': { transform: 'translatey(1%)' },
          '50%': { transform: 'translatey(-1%)' },
        }
      },
      animation: {
        notebook: 'notebook 3s ease-in-out infinite',
        hero: 'hero 5s ease-in-out infinite',
        spin: 'spin 3s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}