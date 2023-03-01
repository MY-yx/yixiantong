<template>
  <div :class="['tab-item', { current: cityInfo.cityId === cityId }]" @click="selectCity(cityInfo)">
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore(),
    cityId = computed(() => store.state.cityId);

  const selectCity = (cityInfo) => {
    store.commit('selectCity', cityInfo)
  }
  defineProps({
    cityInfo: Object
  });
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';
  @import 'styles/mixins.scss';
  .tab-item {
    @include vh-center;
    flex: 1;
    height: 100%;
    border-bottom: 2px solid #fff;
    font-size: .16rem;
    box-sizing: border-box;
    &.current {
      color: $defaultGreen;
      border-bottom: 2px solid $defaultGreen;
    }
  }
</style>