<template>
  <div class="name-bd">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{ name }}</span>
  </div>
</template>

<script setup>
  defineProps({
    name: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  });
</script>

<style lang="scss" scoped>
  .name-bd {
    // display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    line-height: .29rem;
    background-color: #fff;
    box-sizing: border-box;

    .icon-name {
      font-size: .18rem;
      color: #000;
    }

    .name-text {
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
</style>