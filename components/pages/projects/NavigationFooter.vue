<template>
  <div class="flex justify-around">
    <template v-if="prev">
      <div class="flex flex-col items-center">
        <h3 class="text-gray-200">&larr; Previous</h3>

        <NuxtLink :to="prev.path" class="link">
          {{ prev.title }}
        </NuxtLink>
      </div>
    </template>

    <template v-if="next">
      <div class="flex flex-col items-center">
        <h3 class="text-gray-200">Next &rarr;</h3>

        <NuxtLink :to="next.path" class="link">
          {{ next.title }}
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    prev: { default: null, type: Object },
    next: { default: null, type: Object },
  },
}
</script>
