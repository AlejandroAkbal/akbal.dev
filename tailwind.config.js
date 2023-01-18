const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

const generatedColors = {
  orchid: {
    50: '#fafafb',
    100: '#f6f6f8',
    200: '#eae5ef',
    300: '#ddcce5',
    400: '#c9a0d3',
    500: '#ad74ba',
    600: '#844f96',
    700: '#5e3d73',
    800: '#432f53',
    900: '#322640',
  },
  blush: {
    50: '#fbfafb',
    100: '#f8f6f7',
    200: '#f0e4ec',
    300: '#e7cade',
    400: '#da9cc5',
    500: '#c96fa3',
    600: '#a34b7b',
    700: '#73395e',
    800: '#502c46',
    900: '#3c2437',
  },
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: generatedColors.orchid,

        accent: generatedColors.blush,

        darkGray: {
          300: 'hsl(200, 6%, 14%)', // Border
          500: 'hsl(200, 6%, 10%)', // Elevated BG // Original color
          700: 'hsl(200, 6%, 6%)', // Background
        },
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
