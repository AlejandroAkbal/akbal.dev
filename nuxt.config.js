import * as TAILWIND_CONFIG from './tailwind.config'
import { createSitemapRoutes } from './utils/createSitemapRoutes.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: true,

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} | Alejandro Akbal`
        : 'Alejandro Akbal - Software engineer'
    },

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'Alejandro Akbal is a software engineer. He enjoys many things: web development, design, accessibility, SEO, servers, tutorials, and everything in between.',
      },

      // Colors
      {
        hid: 'color-scheme',
        name: 'color-scheme',
        content: 'dark',
      },

      {
        hid: 'theme-color',
        name: 'theme-color',
        content: TAILWIND_CONFIG.theme.extend.colors.darkGray['700'],
      },

      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Alejandro Akbal',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://url-shot.api-point.cf/?width=1200&height=630&url=https://akbal.dev',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://akbal.dev',
      },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://cdn.statically.io/img/raw.githubusercontent.com/h=32,w=32,q=90/AlejandroAkbal/brand/main/src/assets/Logo_white.png',
      },

      // Font
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    viewer: false,

    cssPath: '~/assets/css/global.css',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    editor: false,
  },

  sitemap: {
    hostname: 'https://akbal.dev',

    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    },

    routes: async () => {
      const routeOverrides = [{ url: '/', priority: 1.0 }]

      const nuxtContentRoutes = await createSitemapRoutes()

      return [...routeOverrides, ...nuxtContentRoutes]
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  telemetry: false,
}
