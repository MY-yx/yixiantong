<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <scrocll-wrapper-detail></scrocll-wrapper-detail>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommonHeader from 'components/Header/Common.vue';
import ScrocllWrapperDetail from 'components/ScrollWrapper/Detail.vue';

const title = ref('详细信息');
</script>