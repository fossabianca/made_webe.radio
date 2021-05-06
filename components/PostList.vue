<template>
    <div class="px-6 pt-4 pb-2">
      <NuxtLink
        class="relative z-10"
        v-for="post in posts"
        :key="post.slug"
        :to="'/posts/'+post.slug"
      >
        <span
          class="inline-block text-white dark:text-white dark:bg-indigo-900 bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
          >{{ post.title }}</span
        >
      </NuxtLink>
    </div>
</template>

<style>
</style>
<script>
export default {
  props: ["posts"],
};
</script>
