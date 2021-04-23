<template>
  <li
    class="overflow-hidden border rounded-md snap-center bg-darkGray-500 border-darkGray-300"
  >
    <div class="flex flex-col w-full h-full">
      <!-- Image -->
      <div class="flex justify-center bg-darkGray-700">
        <img
          :src="imgSrc"
          :alt="`${title} cover image`"
          :height="imgHeight"
          :width="imgWidth"
          decoding="async"
          loading="lazy"
          class="object-cover w-full h-auto"
        />
      </div>

      <!-- Description -->
      <div class="flex-auto px-4 pt-3">
        <h3 class="text-gray-200">
          {{ title }}
        </h3>
        <p class="text-sm text-gray-300">
          {{ description }}
        </p>
      </div>

      <!-- Call to action -->
      <div class="flex justify-around flex-shrink-0 p-3">
        <template v-if="visitLinkHref">
          <a :href="visitLinkHref" target="_blank" rel="noopener" class="link">
            Visit
          </a>
        </template>

        <NuxtLink :to="readMoreLinkHref" class="link"> Read more </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },

    imgSrc: { required: true, type: String },
    imgHeight: { required: true, type: Number },
    imgWidth: { required: true, type: Number },

    visitLinkHref: { required: false, default: undefined, type: String },
    readMoreLinkHref: { required: true, type: String },
  },
}
</script>
