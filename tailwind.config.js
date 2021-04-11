const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

const generatedColors = {
  // asparagus: {
  //   50: '#fafbfa',
  //   100: '#f7f8f3',
  //   200: '#eceedd',
  //   300: '#dddcbf',
  //   400: '#beb888',
  //   500: '#949252',
  //   600: '#696c33',
  //   700: '#4c522c',
  //   800: '#373d27',
  //   900: '#2a3022',
  // },
  // sepia: {
  //   50: '#fbfbfa',
  //   100: '#f8f7f5',
  //   200: '#f0e8e5',
  //   300: '#e6d1d0',
  //   400: '#d6a6a7',
  //   500: '#c07c78',
  //   600: '#975651',
  //   700: '#6b4141',
  //   800: '#4a3234',
  //   900: '#38282b',
  // },
  // beaver: {
  //   50: '#fafafa',
  //   100: '#f8f7f6',
  //   200: '#efe8e8',
  //   300: '#e4d0d6',
  //   400: '#d2a5b3',
  //   500: '#ba7a88',
  //   600: '#915560',
  //   700: '#66404b',
  //   800: '#48313a',
  //   900: '#36272f',
  // },
  // wisteria: {
  //   50: '#fafafb',
  //   100: '#f7f6f7',
  //   200: '#ece7ec',
  //   300: '#dfcfdf',
  //   400: '#caa4c6',
  //   500: '#ae79a5',
  //   600: '#84547d',
  //   700: '#5e4060',
  //   800: '#423147',
  //   900: '#322738',
  // },
  // plum: {
  //   50: '#fafafb',
  //   100: '#f7f6f7',
  //   200: '#ece6ed',
  //   300: '#e1cee0',
  //   400: '#cea2c7',
  //   500: '#b476a7',
  //   600: '#8b5180',
  //   700: '#623e62',
  //   800: '#453048',
  //   900: '#342639',
  // },
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
  // chestnut: {
  //   50: '#fbfafa',
  //   100: '#f9f6f6',
  //   200: '#f2e5e9',
  //   300: '#ebcad7',
  //   400: '#e19bb6',
  //   500: '#d56e8d',
  //   600: '#b14a64',
  //   700: '#7f384e',
  //   800: '#582b3c',
  //   900: '#412330',
  // },
  // salmon: {
  //   50: '#fbfafa',
  //   100: '#faf6f4',
  //   200: '#f3e5e5',
  //   300: '#edcbcf',
  //   400: '#e49da6',
  //   500: '#d97078',
  //   600: '#b74b51',
  //   700: '#843940',
  //   800: '#5b2c34',
  //   900: '#44232a',
  // },
  // cooper: {
  //   50: '#fbfafa',
  //   100: '#f9f6f5',
  //   200: '#f1e7e6',
  //   300: '#e9ced1',
  //   400: '#dda2a9',
  //   500: '#cc767b',
  //   600: '#a55153',
  //   700: '#753d42',
  //   800: '#512f35',
  //   900: '#3c262b',
  // },
}

module.exports = {
  mode: 'jit',

  darkMode: false,

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

        // ...defaultColors,
      },

      minWidth: {
        '1/4': '25%',
        // '1/2': '50%',
        // '3/4': '75%',
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {
      textColor: ['group-focus'],
    },

    scrollSnapType: ['responsive'],
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

    require('tailwindcss-scroll-snap'),
  ],
}
