<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab></tab>
    <scroll-wrapper-list></scroll-wrapper-list>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CommonHeader from 'components/Header/Common.vue';
import Tab from 'components/Tab/Index.vue';
import ScrollWrapperList from 'components/ScrollWrapper/List.vue';
import fieldDatas from 'data/fields';

const store = useStore(),
  field = store.state.field,
  title = computed(() => {
    if (field) {
      return fieldDatas.filter(item => item.field === field)[0].iconText;
    }
  });
</script>