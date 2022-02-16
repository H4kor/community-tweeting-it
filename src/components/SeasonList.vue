<template>
  <div class="season-list">
    <div class='navbar'>
      <ul>
        <li v-for="season in seasons" :key="season">
          <router-link
            :class="{active: season === active}"
            :to="{name: 'Season', params: {season}}"
          >
            Season {{ season }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SeasonList',
  components: {},
  computed: {
    ...mapGetters(['seasons']),
    active() {
      if (this.$route.params.episode) {
        return this.$store.getters.episode(parseInt(this.$route.params.episode, 10)).season;
      }
      if (this.$route.params.season) {
        return parseInt(this.$route.params.season, 10);
      }
      return 0;
    },
  },
  created() {
    this.$store.dispatch('loadEpisodes');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.navbar {
  margin-bottom: 10px;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #606c76;
}

.navbar li {
    float: left;
    margin-bottom: 0;
}

.navbar li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.active {
  background-color: #f00;
}

.navbar li a:hover {
    background-color: #2a3088;
}

</style>
