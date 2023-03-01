<template>
  <div class="city">
    <router-link to="City">
      <span class="city-name">{{ $store.state.cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const cityName = ref('上海');
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variables.scss';
  .city {
    width: .6rem;
    height: $headerHeight;

    /** router-link其实就是一个a标签 */
    a {
      @include flex-row;
      @include vh-center;
      width: 100%;
      height: $headerHeight;

      .city-name {
        font-size: .16rem;
        font-weight: bold;
      }

      .iconfont {
        font-size: .08rem;
        margin-left: .03rem;
      }
    }
  }
</style>