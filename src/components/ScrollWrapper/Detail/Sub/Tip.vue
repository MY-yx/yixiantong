<template>
  <div class="tip-bd">
    <span class="iconfont icon-tip"></span>
    <span class="tip-text">{{ tip }}</span>
  </div>
</template>

<script setup>
  defineProps({
    tip: {
      type: String,
      default() {
        return '加载中';
      }
    }
  });
</script>

<style lang="scss" scoped>
  .tip-bd {
    display: flex;
    align-items: center;
    min-height: .44rem;
    padding: .1rem .15rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    .iconfont {
      font-size: .18rem;
      margin-right: .1rem;
      color: #999;
    }
    .tip-text {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>