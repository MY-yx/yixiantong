<template>
  <div class="tab">
    <tab-sub
      v-for="item of cityDatas"
      :key="item.cityId"
      :city-info="item"
    ></tab-sub>
  </div>
</template>

<script setup>
  import TabSub from './Sub.vue';
  import cityDatas from 'data/cities.js';
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  .tab {
    @include flex-row;
    flex-wrap: nowrap;
    height: .44rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
</style>