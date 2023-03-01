<template>
  <div class="icons-wrapper">
    <category-icons-sub
      v-for="item of fieldsData"
      :key="item.id"
      v-bind="item"
    ></category-icons-sub>
  </div>
</template>

<script setup>
import CategoryIconsSub from './Sub.vue';
import fieldsData from 'data/fields.js';
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";
.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

</style>