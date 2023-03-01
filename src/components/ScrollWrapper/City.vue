<template>
  <!-- 这个数据结构一定是两层; mounted阶段挂载 -->
  <div class="scroll-wrapper" ref="wrapper">
    <!-- 滚动区域内容 -->
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script setup>
import useBetterScroll from '@/hooks/useBetterScroll.js'
import CurrentCity from "./CityLIstt/CurrentCity.vue";
import CityList from "./CityLIstt/Index.vue";
import { ref, onMounted } from "vue";

const wrapper = useBetterScroll();
</script>

<style>
</style>