<template>
  <div id="app" class="container">
    <div class="row">
      <div class="column center">
        <router-link :to="{name: 'Home'}">
          <img src="@/assets/logo.png" alt="Community Tweeting It!">
        </router-link>
      </div>
    </div>
    <SeasonList/>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
import SeasonList from '@/components/SeasonList.vue';

export default {
  components: {
    SeasonList,
  },
};
</script>

<style lang="less">
@import "./assets/milligram.css";

.center {
    text-align: center;
}
</style>
