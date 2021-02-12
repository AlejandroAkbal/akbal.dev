<template>
  <main class="container__outer" style="padding-top: 0px; padding-bottom: 0px">
    <div class="my-4 container__inner">
      <article>
        <!-- Image -->
        <div
          class="mx-auto overflow-hidden border border-transparent rounded-md"
        >
          <picture class="w-full h-auto sm:max-w-screen-sm">
            <img :src="page.imageUrl" alt="Project image" />
          </picture>
        </div>

        <!-- Content -->
        <div class="mt-2">
          <h1 class="text-gray-200">{{ page.title }}</h1>

          <nuxt-content :document="page" />
        </div>
      </article>

      <NavigationFooter :prev="prev" :next="next" />
    </div>
  </main>
</template>

<script>
export default {
  layout: 'projects',

  async asyncData({ $content, params, error }) {
    const contentDir = 'projects'

    const slug = params.slug

    const page = await $content(`${contentDir}/${slug}`)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })

        console.log(err)
      })

    const [prev, next] = await $content(contentDir)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()

    return {
      page,
      prev,
      next,
    }
  },

  head() {
    return {
      title: this.page.title,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>
