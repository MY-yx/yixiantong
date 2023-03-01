<template>
  <span class="stars-wrapper">
    <span v-for="num in 5" :key="num" :class="['iconfont icon-star', starNum >= num ? 'active' : '']"></span>
  </span>
</template>

<script setup>
  defineProps({
    starNum: Number
  })
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  .stars-wrapper {
    color: #ccc;

    .active {
      color: $starColor;
    }
  }
</style>