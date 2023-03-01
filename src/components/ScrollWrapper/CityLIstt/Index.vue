<template>
  <div class="list-wrapper">
    <city-list-sub 
      v-for="(item, index) of cityData" 
      :key="index"
      :cityInfo="item"
    ></city-list-sub>
  </div>
</template>

<script setup>
import CityListSub from './Sub.vue';
import cityData from 'data/cities';
</script>

<style lang="scss" scoped>

</style>