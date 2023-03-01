<template>
  <div class="massage-list">
    <template v-for="data of massageDatas" :key="data.id">
      <massage-list-sub :data="data"></massage-list-sub>
    </template>
  </div>
</template>

<script setup>
  import MassageListSub from './Sub.vue';
  defineProps({
    massageDatas: Array
  })
</script>

<style lang="scss" scoped>

</style>