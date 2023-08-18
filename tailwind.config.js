/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(calc(-1*20rem*7))'},
        }
      },
      animation: {
        sliding: 'slide 10s linear infinite',
      },
      left: {
        '1/5': '20%',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("tailwindcss-text-fill"),
  ],
}
