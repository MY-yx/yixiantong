<template>
  <div class="datetime-bd">
    <span class="iconfont icon-datetime"></span>
    <span class="datetime-text">{{ dateTime }}</span>
  </div>
</template>

<script setup>
  defineProps({
    dateTime: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  });
</script>

<style lang="scss" scoped>
  .datetime-bd {
    display: flex;
    align-items: center;
    padding: .1rem .15rem;
    min-height: .44rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    .icon-datetime {
      font-size: .18rem;
      margin-right: .1rem;
      color: #999;
    }
    .datetime-text {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>