(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["episode"],{"038d":function(e,t,s){"use strict";s("d7dc")},"5a14":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.episode?s("h2",{staticClass:"no-pad"},[e._v(" Episode S"+e._s(e.episode.season)+"E"+e._s(e.episode.episode)+" "+e._s(e.episode.title)+" ")]):e._e(),s("div",[s("router-link",{attrs:{to:{name:"Episode",params:{episode:e.episodeIndex-1}}}},[e._v(" Previous Episode ")]),e._v(" - "),s("router-link",{attrs:{to:{name:"Episode",params:{episode:e.episodeIndex+1}}}},[e._v(" Next Episode ")])],1),s("br"),s("br"),e.tweets.length>0?[e._l(e.tweets,(function(t){return s("div",{key:t.id,staticClass:"box-center"},[s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-lang":"en"}},[s("a",{staticClass:"tweet-head",attrs:{href:"https://twitter.com/"+t.screen_name}},[s("img",{attrs:{src:t.profile_image,alt:t.name}}),s("p",{staticClass:"tweet-head-name"},[e._v(" "+e._s(t.name)+" ")])]),s("p",{attrs:{lang:"en",dir:"ltr"}},[e._v(" "+e._s(t.text)+" ")]),e._v(" — "+e._s(t.name)+" (@"+e._s(t.screen_name)+") "),s("a",{attrs:{href:"https://twitter.com/"+t.screen_name+"/status/"+t.id}},[e._v(e._s(t.created_at.toDateString()))])])])})),s("div",[s("router-link",{attrs:{to:{name:"Episode",params:{episode:e.episodeIndex-1}}}},[e._v(" Previous Episode ")]),e._v(" - "),s("router-link",{attrs:{to:{name:"Episode",params:{episode:e.episodeIndex+1}}}},[e._v(" Next Episode ")])],1)]:[s("h3",[e._v(" No tweets during this episode ;(")])]],2)},o=[],a={name:"Season",components:{},computed:{episodeIndex:function(){return parseInt(this.$route.params.episode,10)},episode:function(){return this.$store.getters.episode(this.episodeIndex)},tweets:function(){return this.$store.getters.episodeTweets(this.episodeIndex)}},created:function(){this.$store.dispatch("loadEpisodes"),this.$store.dispatch("loadTweets")}},n=a,r=(s("038d"),s("2877")),d=Object(r["a"])(n,i,o,!1,null,null,null);t["default"]=d.exports},d7dc:function(e,t,s){}}]);
//# sourceMappingURL=episode.3eea8804.js.map