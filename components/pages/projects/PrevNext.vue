<template>
  <div class="flex justify-around">
    <template v-if="prevProject">
      <div class="flex flex-col items-center">
        <h3 class="text-gray-200">&larr; Previous</h3>

        <NuxtLink
          :to="{
            name: `${contentDir}-slug`,
            params: { slug: prevProject.slug },
          }"
          class="link"
        >
          {{ prevProject.title }}
        </NuxtLink>
      </div>
    </template>

    <template v-if="nextProject">
      <div class="flex flex-col items-center">
        <h3 class="text-gray-200">Next &rarr;</h3>

        <NuxtLink
          :to="{
            name: `${contentDir}-slug`,
            params: { slug: nextProject.slug },
          }"
          class="link"
        >
          {{ nextProject.title }}
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    prevProject: {
      type: Object,
      default: () => null,
    },

    nextProject: {
      type: Object,
      default: () => null,
    },

    contentDir: {
      type: String,
      default: () => null,
    },
  },
}
</script>
