/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Public Sans', 'sans-serif']
    },
    gradients: theme => ({
      'green-cyan': [theme('colors.lime-green'), theme('colors.bright-cyan')],
      'green-cyan-300': [theme('colors.emerald'), theme('colors.sky-blue')],
    }),
    extend: {
      colors: {
        'dark-blue': '#2d314d',
        'lime-green': '#31D35C',
        emerald: '#6FE08D',
        'bright-cyan': '#2BB7DA',
        'sky-blue': '#6BCDE5'
      },
      margin: {
        '21': '21rem'
      }
    }
  },
  variants: {
    gradients: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
}
