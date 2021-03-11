const _ = require('lodash')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.65rem', 'line-height: 0.75rem'],
      }
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      backgroundColor: ['group-hover']
    },
  },
  plugins: [
    /**
     * New transition speed utilities
     * 
     * transition-${speed}
     * speeds: ['fast', 'medium', 'slow']
     */
    function ({ addUtilities }) {

      const transitionUtility = {}
      _.map([
        { prefix: '', speed: '0.2s' },
        { prefix: '-fast', speed: '0.1s' },
        { prefix: '-fast', speed: '0.3s' },
        { prefix: '-medium', speed: '0.5s' },
      ], ({ prefix, speed }) => {
        transitionUtility[`.transition${prefix}`] = {
          'transition': `${speed}`
        }
      })

      addUtilities(transitionUtility)
    },
  ],
}
