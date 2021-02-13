<template>
  <main
    class="h-full container__outer"
    style="padding-top: 0px; padding-bottom: 0px"
  >
    <div class="flex flex-col h-full py-3 container__inner">
      <article class="flex-grow">
        <!-- Title -->
        <h1 class="text-lg text-gray-200">{{ page.title }}</h1>

        <!-- Image -->
        <div class="flex justify-center my-2">
          <picture
            class="w-full h-auto overflow-hidden border rounded-md sm:max-w-screen-sm border-a-black-300"
          >
            <img
              :src="page.imageUrl"
              :height="page.imageHeight"
              :width="page.imageWidth"
              :alt="`${page.title} cover image`"
            />
          </picture>
        </div>

        <!-- Content -->
        <nuxt-content :document="page" />
      </article>

      <!-- Navigation -->
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

    try {
      const page = await $content(`${contentDir}/${slug}`).fetch()

      const [prev, next] = await $content(contentDir)
        .only(['title', 'slug'])
        .sortBy('index', 'desc')
        .surround(slug)
        .fetch()

      return {
        page,
        prev,
        next,
      }
    } catch (error) {
      error({ statusCode: 404, message: 'Page not found' })
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
