<template>
  <div class="title-bd">
    <span :class="['iconfont', icon]"></span>
    <span class="title-text">{{ title }}</span>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    icon: String
  });
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  .title-bd {
    display: flex;
    align-items: center;
    height: .44rem;
    padding: 0 .15rem;
    border-bottom: 1px solid #ddd;
    line-height: .44rem;
    background-color: #fff;
    box-sizing: border-box;
    .iconfont {
      font-size: .18rem;
      margin-right: .1rem;
      color: $defaultGreen;
    }
    .title-text {
      font-size: .16rem;
      color: $defaultGreen;
    }
  }
</style>