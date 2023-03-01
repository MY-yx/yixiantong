<template>
  <div class="current-city">
    <span>当前城市: </span>
    <router-link :to="{ name: path }">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{ $store.state.cityName }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
const path = ref("Index");
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";
.current-city {
  @include flex-row;
  align-items: center;
  height: .5rem;
  padding-left: .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: .16rem;

  .iconfont {
    vertical-align: .005rem;
    color: $defaultBgColor;
  }

  .city {
    line-height: 1rem;
  }
}
</style>