<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  head: {
    bodyAttrs: {
      class: "min-h-full dark:bg-gray-700 font-sans text-gray-700 dark:text-gray-50 leading-normal "
    }
  }
}
</script>
