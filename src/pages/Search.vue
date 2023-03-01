<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @on-search="onSearch" @error-exist="hasDataSetter(() => false)"></search-input>
    <scroll-wrapper-detail v-bind="searchData" :hasData="hasData" :hasError="hasError"></scroll-wrapper-detail>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useState from 'hooks/useState.js';
import CommonHeader from 'components/Header/Common.vue';
import SearchInput from 'components/SearchInput/Index.vue';
import ScrollWrapperDetail from 'components/ScrollWrapper/Search.vue';

const title = ref('详细信息');
let [hasData, hasDataSetter] = useState(false),
  [hasError, hasErrorSetter] = useState(false),
  searchData = reactive({});

const onSearch = (res) => {
  // 这里需要校验是否有相关结果, 如果没有(foodData什么的都没有的情况)
  let keys = Object.keys(res);
  if (keys.length <= 0) {
    hasErrorSetter(() => false);
    hasData.value = false;
  } else {
    searchData = res;
    hasErrorSetter(() => false);
    hasDataSetter(() => true);
  }
}

const handlerError = () => { 
  hasErrorSetter(() => false);
}
</script>

<style lang="scss" scoped>
  
</style>