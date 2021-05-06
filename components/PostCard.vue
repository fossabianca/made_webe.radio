<template>
    <div class="text-gray-700 dark:text-white dark:bg-gray-700 relative max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <img
        alt="Cover image"
        v-if="post.image"
        class="w-full"
        :src="$getStrapiImage(post.image.url)"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" v-html="post.title" />
        <markdown-it-vue class="text-gray-700 dark:text-gray-50 text-xs" :content="article" />

        <Tags :post="post" />
        <NuxtLink
          class="link w-1/2 flex items-center justify-center rounded-md bg-black text-white"
          :to="'/posts/'+post.slug"
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

export default {
  components: {
    Tags,
  },
  props: ["post"],
  computed: {
    // Search system
    article() {
      let article = this.post.article || "";
      return article.substring(0,255);
    },
  },
};
</script>

