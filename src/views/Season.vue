<template>
  <div>
    <h2>Season {{season}}</h2>
    <table>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Title</th>
          <th>Released</th>
          <th>Tweets</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ep in episodes" :key="ep.index">
          <td>
            <router-link :to="{name: 'Episode', params: {episode:ep.index}}">
              {{ep.episode}}
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'Episode', params: {episode:ep.index}}">
              {{ep.title}}
            </router-link>
          </td>
          <td>{{ep.release}}</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Season',
  components: {},
  computed: {
    season() {
      return parseInt(this.$route.params.season, 10);
    },
    episodes() {
      return this.$store.getters.seasonEpisodes(this.season);
    },
  },
  created() {
    this.$store.dispatch('loadEpisodes');
    this.$store.dispatch('loadTweets');
  },
};
</script>
