<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="container__outer"
      style="padding-top: 0px; padding-bottom: 0px; margin-left: 0px"
    >
      <div class="p-3 container__inner">
        <NuxtLink to="/" class="link"> &larr; Go back </NuxtLink>
      </div>
    </div>

    <Spacer />

    <!-- Content -->
    <div class="flex-grow overflow-hidden">
      <Nuxt />
    </div>

    <Spacer />

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: { class: ['subpixel-antialiased ', 'bg-darkGray-700'] },
    }
  },
}
</script>
