<template>
  <div class="food-list">
    <template v-for="data of foodDatas" :key="data.id">
      <food-list-sub :data="data"></food-list-sub>
    </template>
  </div>
</template>

<script setup>
  import FoodListSub from './Sub.vue';
  defineProps({
    foodDatas: Array
  })
</script>

<style lang="scss" scoped>

</style>