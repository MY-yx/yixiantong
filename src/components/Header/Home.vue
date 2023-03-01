<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script setup>
  import CitySelector from './Sub/CitySelector.vue';
  import FalseInput from './Sub/FalseInput.vue';
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variables.scss';
  .header {
    @include flex-row;
    height: $headerHeight;
    background-color: $defaultBgColor;
  }
</style>