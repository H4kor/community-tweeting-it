<template>
  <div class="home">
    <h4>Welcome to "Community Tweeting It!"</h4>
   <br>
    This is a small project to make the tweets of the show more accessible.
    If I forgot a twitter account feel free to message me <a href="https://twitter.com/H4kor">@H4kor</a>.
    <br>
    <br>
    <i>P.S.: Please dont sue me!</i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(['seasons']),
  },
  created() {
    this.$store.dispatch('loadEpisodes');
  },
};
</script>
