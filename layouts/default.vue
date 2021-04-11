<template>
  <div>
    <!-- Content -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return { bodyAttrs: { class: ['subpixel-antialiased', 'bg-darkGray-500'] } }
  },
}
</script>
