<template>
  <div class="comment-bd">
    <detail-title icon="icon-haoping" title="评论关键词"></detail-title>
    <div class="comment-keyword">
      <span v-for="keyword of comment_keyword" :key="keyword" class="keyword">{{ keyword }}</span>
    </div>
  </div>
</template>

<script setup>
  import DetailTitle from './Title.vue';
  defineProps({
    comment_keyword: Array
  });
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  @import 'styles/mixins.scss';
  .comment-bd {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    box-sizing: border-box;
    .comment-keyword {
      @include flex-row;
      flex-wrap: wrap;
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: .18rem;
      box-sizing: border-box;
    }
    .keyword {
      @include vh-center;
      height: .25rem;
      padding: 0 .05rem;
      margin: 0 .05rem .05rem 0;
  		border: 1px solid $defaultGreen;
      border-radius: .03rem;
      color: $defaultGreen;
    }
  }
</style>