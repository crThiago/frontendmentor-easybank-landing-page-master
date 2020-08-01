module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Public Sans', 'sans-serif']
    },
    gradients: theme => ({
      'green-cyan': [theme('colors.lime-green'), theme('colors.bright-cyan')],
    }),
    extend: {
      colors: {
        'dark-blue': '#2d314d',
        'lime-green': '#31d35c',
        'bright-cyan': '#2bb7da',
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
  plugins: [
    require('./plugins/gradients')
  ],
}