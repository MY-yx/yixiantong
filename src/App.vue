<script setup>

</script>

<template>
  <!-- Vue Router最新写法 -->
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Index', 'Detail', 'Search']">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped>
</style>
