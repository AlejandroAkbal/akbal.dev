export async function createSitemapRoutes() {
  const { $content } = require('@nuxt/content')

  const routes = []

  const files = await $content({ deep: true })
    .only(['path', 'updatedAt'])
    .fetch()

  for (const file of files) {
    if (file.path === '/index') {
      routes.push({
        url: '/',
        priority: 1.0,
        lastmod: new Date(file.updatedAt),
      })

      continue
    }

    routes.push({
      url: file.path,
      priority: 0.8,
      lastmod: new Date(file.updatedAt),
    })
  }

  return routes
}
