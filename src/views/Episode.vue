<template>
  <div>
    <h2 class="no-pad" v-if="episode">
      Episode S{{episode.season}}E{{episode.episode}} {{episode.title}}
    </h2>
    <div>
      <router-link :to="{name: 'Episode', params: { episode: episodeIndex - 1}}">
        Previous Episode
      </router-link>
      -
      <router-link :to="{name: 'Episode', params: { episode: episodeIndex + 1}}">
        Next Episode
      </router-link>
    </div>
    <br><br>
    <template v-if="tweets.length > 0">
      <div class="box-center" v-for="tweet in tweets" :key="tweet.id">
        <blockquote class="twitter-tweet" data-lang="en">
          <a :href="'https://twitter.com/'+tweet.screen_name" class="tweet-head">
            <img :src="tweet.profile_image" :alt="tweet.name">
            <p class="tweet-head-name">
              {{tweet.name}}
            </p>
          </a>
          <p lang="en" dir="ltr">
            {{tweet.text}}
          </p>
          &mdash; {{tweet.name}} (@{{tweet.screen_name}})
          <a :href="'https://twitter.com/'+tweet.screen_name+'/status/'+tweet.id">{{tweet.created_at.toDateString()}}</a>
        </blockquote>
      </div>
    </template>
    <template v-else>
      <h3> No tweets during this episode ;(</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Season',
  components: {},
  computed: {
    episodeIndex() {
      return parseInt(this.$route.params.episode, 10);
    },
    episode() {
      return this.$store.getters.episode(this.episodeIndex);
    },
    tweets() {
      return this.$store.getters.episodeTweets(this.episodeIndex);
    },
  },
  created() {
    this.$store.dispatch('loadEpisodes');
    this.$store.dispatch('loadTweets');
  },
};
</script>

<style lang="less">
.no-pad {
  margin-bottom:0;
}

.box-center {
  width: 100%;
  margin: 0 auto;
}

.twitter-tweet {
  max-width: 480px;
  border: 0.3rem solid;
  border-color: #1da1f2;
}

.tweet-head {
  display: table;
}

.tweet-head-name {
  display: table-cell;
  vertical-align: middle;
  padding-left: 8px;
}
</style>
