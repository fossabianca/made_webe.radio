<template>
  <div>
    <navbar></navbar>
    <home></home>
    <podcast></podcast>
    <news></news>
    <about></about>
    <about-made></about-made>
    
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>

<script>
import AboutMade from '../components/about-made.vue';
import About from "../components/about.vue";
import home from "../components/home.vue";
import Podcast from "../components/podcast.vue";
export default {
  components: { home, About, Podcast, AboutMade}
};
</script>
