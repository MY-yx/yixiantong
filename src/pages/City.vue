<template>
  <!-- 这样pages下面的页面文件就看起来很清晰 -->
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommonHeader from 'components/Header/Common.vue';
import CityScrollWrapper from 'components/ScrollWrapper/City.vue';

const title = ref('城市选择');
</script>