<template>
  <div class="ktv-list">
    <template v-for="data of ktvDatas" :key="data.id">
      <massage-list-sub :data="data"></massage-list-sub>
    </template>
  </div>
</template>

<script setup>
  import MassageListSub from './Sub.vue';
  defineProps({
    ktvDatas: Array
  })
</script>

<style lang="scss" scoped>

</style>