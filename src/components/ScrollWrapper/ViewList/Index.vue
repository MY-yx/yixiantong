<template>
  <div class="view-list">
    <template v-for="data of viewDatas" :key="data.id">
      <view-list-sub :data="data"></view-list-sub>
    </template>
  </div>
</template>

<script setup>
  import ViewListSub from './Sub.vue'
  defineProps({
    viewDatas: Array
  })
</script>

<style lang="scss" scoped>
  @import "styles/mixins.scss";
  .view-list {
    @include flex-row;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>