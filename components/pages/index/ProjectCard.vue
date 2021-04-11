<template>
  <li
    class="h-full min-w-full overflow-hidden border rounded-md sm:min-w-1/4 test snap-center bg-darkGray-500 border-darkGray-300"
  >
    <div class="flex flex-col">
      <!-- Image -->
      <div class="flex justify-center">
        <picture class="w-full h-auto">
          <img
            :src="imgSrc"
            :height="imgHeight"
            :width="imgWidth"
            :alt="`${title} cover image`"
            decoding="async"
            loading="lazy"
          />
        </picture>
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
          <a
            :href="visitLinkHref"
            target="_blank"
            rel="noopener"
            class="link focus:focus-util"
          >
            Visit
          </a>
        </template>

        <NuxtLink :to="readMoreLinkHref" class="link focus:focus-util">
          Read more
        </NuxtLink>
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
