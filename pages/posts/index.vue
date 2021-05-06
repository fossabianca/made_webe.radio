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
    <PostCard
          v-for="post in filteredList"
          :key="post.id"
          :post="post"
      />
    </section>
    <!-- // If no post have been found -->
    <div
      class=""
      v-if="filteredList.length == 0"
    >
      <img
        src="~/assets/images/undraw_page_not_found_su7k.png"
        height="453"
        width="800"
      />
      <p>No Post found</p>
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
import postsQuery from "~/apollo/queries/post/posts";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },

  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],
      searchQuery: "",
    };
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
    },

  },
  computed: {
    // Search system
    filteredList() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
