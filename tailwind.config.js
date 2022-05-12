const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Bodoni', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
