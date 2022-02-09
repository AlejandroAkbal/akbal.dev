<template>
  <div
    class="h-full container__outer"
    style="padding-top: 0px; padding-bottom: 0px"
  >

    <main class="py-2 container__inner">
      <NuxtLink to="/" class="text-lg link"> &larr; Home </NuxtLink>

      <Spacer class="mt-1 mb-4" />

      <article>
        <!-- Title -->
        <h1 class="text-lg font-medium leading-tight text-gray-200">Project</h1>
        <h2 class="text-lg text-gray-200">{{ project.title }}</h2>

        <!-- Image -->
        <div class="m-3 overflow-hidden border rounded-md border-darkGray-300">
          <img
            :src="project.imageUrl"
            :height="project.imageHeight"
            :width="project.imageWidth"
            class="w-full h-auto mx-auto"
            :alt="`${project.title} cover image`"
          />
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
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const contentDir = 'projects'

    const { slug } = params

    try {
      const project = await $content(contentDir, slug).fetch()

      const [prevProject, nextProject] = await $content(contentDir)
        .only(['title', 'slug', 'creationDate'])
        .sortBy('creationDate', 'desc')
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
    const projectTitle = `${this.project.title} - Project`

    return {
      title: projectTitle,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: projectTitle },
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
