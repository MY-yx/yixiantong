<template>
  <div class="recom-bd">
    <detail-title
      title="推荐菜品"
      icon="icon-recom"
    ></detail-title>
    <div class="recom-content">
      <span class="recom-text">{{ recom }}</span>
    </div>
  </div>
</template>

<script setup>
  import DetailTitle from './Title.vue';
  defineProps({
    recom: String
  });
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  .recom-bd {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    .recom-content {
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: .18rem;
      text-indent: 2em;
      box-sizing: border-box;
    }
  }
</style>