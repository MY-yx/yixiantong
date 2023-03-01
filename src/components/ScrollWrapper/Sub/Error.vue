<template>
  <div class="error-bd" v-show="showError">
    <span class="iconfont icon-error"></span>
    <p class="error-text">网络走丢了</p>
  </div>
</template>

<script setup>
  defineProps({
    showError: Boolean
  });
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  .error-bd {
    @include vh-center;
    flex-direction: column;
    height: 3rem;
    color: #999;
    .iconfont {
      font-size: .5rem;
    }
    .error-text {
      margin-top: .1rem;
      font-size: .15rem;
    }
  }
</style>