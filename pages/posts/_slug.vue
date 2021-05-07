<template>
  <div class="px-6 p-20">
    
    <main>
      <div class="flex">
        <BackButton />
      <h1 class="text-2xl mb-6">
        {{ posts[0].title }}
      </h1>
      </div>
      <div>
        <img
          class="shadow-lg rounded-lg max-w-prose"
          alt="Article image"
          v-if="posts[0].image"
          :src="$getStrapiImage(posts[0].image.url)"
        />
      </div>
      <markdown-it-vue
        class="text-gray-700 text-3xl p-2 mt-0.5"
        :content="article"
      />

      <div class="bg-blue-200 dark:bg-blue-500">
        <PostList :posts="related" />
      </div>
      <div class="bg-gray-200 dark:bg-gray-500">
        <Tags :post="posts[0]" />
      </div>
    </main>
  </div>
</template>

<script>
import postQuery from "~/apollo/queries/post/post";
import Tags from "~/components/Tags";
import PostList from "~/components/PostList";
import BackButton from "~/components/BackButton";

export default {
  components: {
    Tags,
    PostList,
    BackButton,
  },
  data() {
    return {
      posts: [
        {
          tags: [],
        },
      ],
    };
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
  computed: {
    article() {
      let article = this.posts[0].article || "";
      return article;
    },
    related() {
      let tags = this.posts[0].tags;
      let currentPost = JSON.stringify({
          title: this.posts[0].title,
          slug: this.posts[0].slug,
          __typename:"Post",
          });
      let posts = [];
      tags.forEach((tag) => {
        posts.push(...tag.posts);
      });

      posts = Array.from(
        new Set(posts.map((object) => JSON.stringify(object)))
      )
      .filter( post => post !== currentPost)
      .map((serialized) => JSON.parse(serialized));
      return posts;
    },
  },
};
</script>
