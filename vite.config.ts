import { defineConfig } from 'vite'

import { minifyHtml, injectHtml } from 'vite-plugin-html'

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
  },

  plugins: [minifyHtml()],
})
