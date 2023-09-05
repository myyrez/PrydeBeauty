/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("tailwindcss-text-fill"),
  ],
}
