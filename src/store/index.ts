import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    episodes: [],
    tweets: [],
  },
  mutations: {
    setEpisodes: (state, episodes) => {
      Vue.set(state, 'episodes', episodes);
    },
    setTweets: (state, tweets) => {
      Vue.set(state, 'tweets', tweets.map((t) => {
        const nt = t;
        nt.created_at = new Date(t.created_at); // eslint-disable-line
        return nt;
      }));
    },
  },
  actions: {
    loadEpisodes: async (context) => {
      if (context.state.episodes.length === 0) {
        const data = (await fetch('episodes.json')).json();
        context.commit('setEpisodes', await data);
      }
    },
    loadTweets: async (context) => {
      if (context.state.tweets.length === 0) {
        const data = (await fetch('tweets.json')).json();
        context.commit('setTweets', await data);
      }
    },
  },
  getters: {
    seasons: (state) => [...new Set(state.episodes.map((x) => x.season))],
    seasonEpisodes: (state) => (season) => state.episodes.filter((x) => x.season === season),
    episode: (state) => (index) => state.episodes.find((x) => x.index === index) || null,
    episodeTweets: (state, getters) => (epIndex) => {
      if (!getters.episode(epIndex)) {
        return [];
      }
      const { release } = getters.episode(epIndex);
      return state.tweets.filter((t) => {
        const day = ('0' + t.created_at.getDate().toString()).slice(-2); // eslint-disable-line
        const month = ('0' + (t.created_at.getMonth() + 1).toString()).slice(-2); // eslint-disable-line
        const year = t.created_at.getFullYear().toString().slice(2);
        const date = `${month}/${day}/${year}`;
        return date === release;
      });
    },
  },
});
