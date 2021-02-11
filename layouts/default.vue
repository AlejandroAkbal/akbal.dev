<template>
  <div>
    <!-- Content -->
    <Nuxt />

    <Spacer />

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return { bodyAttrs: { class: ['subpixel-antialiased ', 'bg-a-black-500'] } }
  },
}
</script>
