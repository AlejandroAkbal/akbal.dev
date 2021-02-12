<template>
  <div class="flex flex-col min-h-screen">
    <div class="container__outer" style="padding-top: 0px; padding-bottom: 0px">
      <div class="p-4 container__inner">
        <NuxtLink to="/" class="text-lg link"> &larr; Go back </NuxtLink>
      </div>
    </div>

    <Spacer />

    <!-- Content -->
    <div class="flex-auto">
      <Nuxt />
    </div>

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
