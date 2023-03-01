<template>
  <div class="address-bd">
    <span class="iconfont icon-positioning"></span>
    <span class="address-text">{{ address }}</span>
  </div>
</template>

<script setup>
  defineProps({
    address: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  });
</script>

<style lang="scss" scoped>
  .address-bd {
    display: flex;
    align-items: center;
    padding: .1rem .15rem;
    min-height: .44rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    .icon-positioning {
      font-size: .18rem;
      margin-right: .1rem;
      color: #999;
    }
    .address-text {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>