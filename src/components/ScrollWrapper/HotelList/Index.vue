<template>
  <div class="food-list">
    <template v-for="data of hotelDatas" :key="data.id">
      <hotel-list-sub :data="data"></hotel-list-sub>
    </template>
  </div>
</template>

<script setup>
  import HotelListSub from './Sub.vue';
  defineProps({
    hotelDatas: Array
  })
</script>

<style lang="scss" scoped>

</style>