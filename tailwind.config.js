module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        'a-black-100': 'hsl(200, 6%, 18%)',
        'a-black-200': 'hsl(200, 6%, 16%)',
        'a-black-300': 'hsl(200, 6%, 14%)',
        'a-black-400': 'hsl(200, 6%, 12%)',
        'a-black-500': 'hsl(200, 6%, 10%)', // OG
        'a-black-600': 'hsl(200, 6%, 8%)',
        'a-black-700': 'hsl(200, 6%, 6%)',
        'a-black-800': 'hsl(200, 6%, 4%)',
        'a-black-900': 'hsl(200, 6%, 2%)',

        'a-violet-500': 'hsl(320, 42%, 47%)',

        'a-purple-500': 'hsl(261, 25%, 47%)',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
