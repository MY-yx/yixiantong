<template>
  <div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script setup>
  import Stars from 'components/ScrollWrapper/Sub/Stars.vue';
  defineProps({
    score: {
      type: String,
      default() {
        return '0.0';
      }
    },
    starNum: {
      type: Number,
      default() {
        return 0;
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  .stars-bd {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    .icon-smile {
      font-size: .18rem;
      margin: .08rem .1rem 0 0;
      color: #999;
    }
    .score {
      font-size: .16rem;
		margin: .1rem 0 0 .15rem;
		color: $defaultOrange;
    }
  }
</style>