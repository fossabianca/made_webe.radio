<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "home",
  head: {
    bodyAttrs: {
      class: "home-cover bg-cover bg-center min-h-full dark:bg-gray-700 font-sans text-gray-700 dark:text-gray-50 leading-normal"
    }
  }
}
</script>
<style>
.home-cover {
  background-image: url(~/assets/images/jason-rosewell-ASKeuOZqhYU-unsplash.jpg);
}
</style>
