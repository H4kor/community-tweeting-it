<template>
  <div class="home">
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
