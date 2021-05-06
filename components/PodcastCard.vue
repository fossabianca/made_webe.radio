<template>
    <div class="text-gray-700 dark:text-white dark:bg-gray-700 relative max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <img
        alt="Cover image"
        v-if="podcast.cover"
        class="w-full"
        :src="$getStrapiImage(podcast.cover.url)"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" v-html="podcast.title" />
        <markdown-it-vue class="text-gray-700 dark:text-gray-50 text-xs" :content="description" />

        <EpisodesList :podcast="podcast" />
        <Tags :post="podcast" />
        <NuxtLink
          class="link w-1/2 flex items-center justify-center rounded-md bg-black text-white"
          :to="'/podcasts/'+podcast.slug"
          >Link</NuxtLink>
      </div>
    </div>
</template>
<style scoped>
.link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>
<script>
import Tags from "~/components/Tags";
import EpisodesList from "~/components/EpisodesList";

export default {
  components: {
    Tags,
    EpisodesList,
  },
  props: ["podcast"],
  computed: {
    // Search system
    description() {
      return this.podcast.description || "";
    },
  },

};
</script>

