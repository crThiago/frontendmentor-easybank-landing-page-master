module.exports = {
  themes: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Public Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-blue': '#2d314d',
        'lime-green': '#31d35c',
        'bright-cyan': '#2bb7da',
      },
      gradients: theme => ({
        'green-cyan': [theme('colors.lime-green'), theme('colors.bright-cyan')],
      }),
      screen: {
        'xxl': '1440px'
      }
    }
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  pugins: [
    require('./plugins/gradients')
  ]
}