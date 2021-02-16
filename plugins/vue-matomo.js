import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default (context) => {
  const { app, $config } = context

  Vue.use(VueMatomo, {
    host: $config.MATOMO_HOST,
    siteId: $config.MATOMO_SITE_ID,

    router: app.router,

    disableCookies: true,

    debug: $config.NODE_ENV !== 'production',
  })
}
