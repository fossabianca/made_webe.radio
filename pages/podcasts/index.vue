<template>
  <div class="px-6">
    <!-- // Search input to filters podcasts -->
    <form class="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <input
        class="h-14 w-96 pr-8 pl-5 rounded-full z-0 dark:text-gray-700 shadow dark:shadow-inner focus:outline-none"
        v-model="searchQuery"
        type="search"
        placeholder="Cerca..."
      />
      <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
      </div>
    </form>

    <section class="flex flex-col flex-wrap md:flex-row gap-3 mt-6">
    <PodcastCard
          v-for="podcast in filteredList"
          :key="podcast.id"
          :podcast="podcast"
      />
    </section>
    <!-- // If no podcast have been found -->
    <div
      class=""
      v-if="filteredList.length == 0"
    >
      <img
        src="~/assets/images/undraw_page_not_found_su7k.png"
        height="453"
        width="800"
      />
      <p>No Podcast found</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
<script>
// Import the restaurants query
import podcastsQuery from "~/apollo/queries/podcast/podcasts";
import PodcastCard from "~/components/PodcastCard.vue";

export default {
  components: {
    PodcastCard,
  },

  data() {
    return {
      // Initialize an empty restaurants variabkle
      podcasts: [],
      searchQuery: "",
    };
  },
  apollo: {
    podcasts: {
      prefetch: true,
      query: podcastsQuery,
    },

  },
  computed: {
    // Search system
    filteredList() {
      return this.podcasts.filter((podcast) => {
        return podcast.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
