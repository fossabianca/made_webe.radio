<template>
      <main class="px-6" >
        <BackButton />

        <h1 class="text-2xl mb-6">
          {{ episodes[0].title }}
        </h1>

        <div>
          <img
            class="shadow-lg rounded-lg"
            alt="Cover image"
            v-if="episodes[0].cover"
            :src="$getStrapiImage(episodes[0].cover.url)"
          />
        </div>

        <markdown-it-vue class="text-gray-700 text-4xl mt-10" :content="description" />

        <div class="">
          <Tags :post="episodes[0]" />
        </div>

        <div v-html="spreakerEmbed" />
      </main>
</template>
<script>
import episodesQuery from "~/apollo/queries/episode/episode";
import Tags from "~/components/Tags";
import BackButton from "~/components/BackButton";

export default {
  components: {
    Tags,
    BackButton
  },
   data() {
    return {
        episodes: [{}]
    };
  },
  apollo: {
    episodes: {
      prefetch: true,
      query: episodesQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
  head() {
    return {
      title: this.episodes[0].title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: this.episodes[0].slug,
          name: "description",
          content: this.episodes[0].description || "",
        }
      ]
    };
  },

  computed: {
    ep () {
      return this.episodes;
    },
    spreakerEmbed () {
      let episode = this.episodes[0];
      let iframe = this.$spreakerIframe(episode.spreaker_id, "episode", "200px", this.$colorMode.preference, episode.spreaker_limited);
      return iframe;
    },
    description() {
      return this.episodes[0].description || "";
    },


  },

};
</script>
