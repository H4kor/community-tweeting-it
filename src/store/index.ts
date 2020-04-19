import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface Episode {
  season: number;
  index: number;
}

interface Tweet {
  created_at: Date;
}

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
      Vue.set(state, 'tweets', tweets.map((t: any) => {
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
    seasons: (state) => [...new Set(state.episodes.map((x: Episode) => x.season))],
    seasonEpisodes: (state) => (season: number) => state.episodes.filter(
      (x: Episode) => x.season === season,
    ),
    episode: (state) => (index: number) => state.episodes.find(
      (x: Episode) => x.index === index,
    ) || null,
    episodeTweets: (state, getters) => (epIndex: number) => {
      if (!getters.episode(epIndex)) {
        return [];
      }
      const { release } = getters.episode(epIndex);
      const releaseDate = new Date(release);
      let prevReleaseDate: any = null;
      if (getters.episode(epIndex - 1)) {
        const prevRelease = getters.episode(epIndex - 1).release;
        prevReleaseDate = new Date(prevRelease);
      }

      return state.tweets.filter((t: Tweet) => {
        if (prevReleaseDate !== null) {
          return t.created_at < releaseDate && t.created_at > prevReleaseDate;
        }
        return t.created_at < releaseDate;
      });
    },
  },
});
