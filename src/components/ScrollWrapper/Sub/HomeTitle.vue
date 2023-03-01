<template>
  <div class="home-title">
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default() {
        return '一线生活通';
      }
    }
  });
</script>

<style lang="scss" scoped>
  .home-title {
    height: .5rem;
    padding-left: .15rem;
    margin-top: .1rem;
    border-bottom: 1px solid #ddd;
    line-height: .5rem;
    background-color: #fff;
    box-sizing: border-box;
    p {
      font-size: .18rem;
      color: #000;
    }
  }
</style>