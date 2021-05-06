<template>
  <div class="px-6">
      <markdown-it-vue class="text-gray-700 dark:text-gray-50 text-lg" :content="aboutUs.about" />

  </div>
</template>

<script>
import aboutUsQuery from "~/apollo/queries/single/aboutUs";
export default {
  data() {
    return {
      // Initialize an empty variabkle
      aboutUs: {},
      query: "",
    };
  },
  apollo: {
    aboutUs: {
      prefetch: true,
      query: aboutUsQuery,
    },
  },
};

</script>

