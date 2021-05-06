<template>
  <ClientOnly>
    <div class="px-6 pt-4 pb-2">
      <NuxtLink
        class="episode-list"
        v-for="episode in podcast.episodes"
        :key="episode.slug"
        :to="'/episodes/'+episode.slug"
      >
        <span
          class="inline-block text-white dark:text-white dark:bg-indigo-900 bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
          >{{ episode.title }}</span
        >
      </NuxtLink>
    </div>
  </ClientOnly>
</template>

<style>
.episode-list {
  position: relative;
  z-index: 1;
}
</style>
<script>
export default {
  props: ["podcast"],
};
</script>

