<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price-text">￥{{ defaultPrice }}元起</span>
  </div>
</template>

<script setup>
  defineProps({
    defaultPrice: String
  });
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  .price-bd {
    display: flex;
    height: .44rem;
	  padding: .03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    .icon-price {
      font-size: .18rem;
		  margin: .08rem .1rem 0 0;
		  color: #000;
    }
    .price-text {
      font-size: .16rem;
		  margin-top: .1rem;
		  color: $defaultOrange;
    }
  }
</style>