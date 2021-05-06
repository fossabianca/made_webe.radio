<template>
  <div>
    <BackButton />
    <ClientOnly>
      <main class="px-6">
        <h1 class="text-2xl mb-6">
          {{ podcasts[0].title }}
        </h1>

        <div>
          <img
            class="shadow-lg rounded-lg"
            alt="Cover image"
            v-if="podcasts[0].cover"
            :src="$getStrapiImage(podcasts[0].cover.url)"
          />
        </div>
        <markdown-it-vue class="text-gray-700 text-3xl p-2 mt-0.5" :content="description" />

        <div>
          <EpisodesList :podcast="podcasts[0]" />
        </div>
        <div class="">
          <Tags :post="podcasts[0]" />
        </div>

        <div v-html="spreakerEmbed" />
      </main>
    </ClientOnly>
  </div>
</template>

<script>
import podcastsQuery from "~/apollo/queries/podcast/podcast";
import Tags from "~/components/Tags";
import EpisodesList from "~/components/EpisodesList";
import BackButton from "~/components/BackButton";

export default {
  components: {
    Tags,
    EpisodesList,
    BackButton
  },
  data() {
    return {
      podcasts: [
        {
          id:"",
          title:"",
          slug:"",
          date:"",
          description:"",
          spreaker_id:"",
        }
      ],
    };
  },
  apollo: {
    podcasts: {
      prefetch: true,
      query: podcastsQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
  computed: {
    spreakerEmbed() {
      let podcast = this.podcasts[0];
      return this.$spreakerIframe(podcast.spreaker_id, "show", "500px", this.$colorMode.preference, podcast.spreaker_limited)
    },
    description() {
      return this.podcasts[0].description || "";
    },

  },
};
</script>
