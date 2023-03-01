<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input class="input" v-model="keyword" type="text" :placeholder="placeholder" @input="onSearch">
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import Tool from '@/utils/tool.js';
  import SearchModel from '../../models/search';

  const emit = defineEmits(['on-search', 'error-exist']);
  const store = useStore();

  let cityId = computed(() => store.state.cityId),
    placeholder = ref('美食 / 景点 / 酒店 / 按摩 / KTV'),
    keyword = ref('');
  
  const onSearch = Tool.throttle(() => {
    const kw = Tool.trimSpace(keyword.value);
    if (kw.length <= 0) {
      return emit('on-search', {});
    } else {
      new SearchModel()
      .searchAction(kw, cityId.value)
        .then(res => {
          emit('on-search', res);
        })
        .catch(err => {
          emit('error-exist')
        })
    }
  }, 1000);
</script>

<style lang="scss" scoped>
  .search-input {
    height: .44rem;
    padding: .06rem .15rem;
    background-color: #fff;
    box-sizing: border-box;
    .input-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      .iconfont {
        position: absolute;
        top: .08rem;
        left: .08rem;
        font-size: .16rem;
      }

      .input {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: .03rem;
        font-size: .14rem;
        text-indent: .32rem;
        box-sizing: border-box;
      }
    }
  }
</style>