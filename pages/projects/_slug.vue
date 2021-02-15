<template>
  <main
    class="h-full container__outer"
    style="padding-top: 0px; padding-bottom: 0px"
  >
    <div class="flex flex-col h-full py-3 container__inner">
      <article class="flex-grow">
        <!-- Title -->
        <h1 class="text-lg text-gray-200">{{ project.title }}</h1>

        <!-- Image -->
        <div class="flex justify-center my-3">
          <picture
            class="w-full h-auto overflow-hidden border rounded-md sm:max-w-screen-sm border-a-black-300"
          >
            <img
              :src="project.imageUrl"
              :height="project.imageHeight"
              :width="project.imageWidth"
              :alt="`${project.title} cover image`"
            />
          </picture>
        </div>

        <!-- Content -->
        <nuxt-content :document="project" />
      </article>

      <!-- Navigation -->
      <PrevNext
        :prev-project="prevProject"
        :next-project="nextProject"
        :content-dir="contentDir"
      />
    </div>
  </main>
</template>

<script>
export default {
  layout: 'projects',

  async asyncData({ $content, params, error }) {
    const contentDir = 'projects'

    const { slug } = params

    try {
      const project = await $content(contentDir, slug).fetch()

      const [prevProject, nextProject] = await $content(contentDir)
        .only(['title', 'slug'])
        .sortBy('index', 'desc')
        .surround(slug)
        .fetch()

      return {
        project,
        prevProject,
        nextProject,
        contentDir,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Project not found' })
    }
  },

  head() {
    return {
      title: this.project.title,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.description,
        },
      ],
    }
  },
}
</script>
