<template>
<div id="news" class="container max-w-7xl mx-auto pt-16 md:pt-32 break-normal">

    <h1 class="font-black uppercase text-3xl">news</h1>
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
    </div>
  </div>
</template>

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
