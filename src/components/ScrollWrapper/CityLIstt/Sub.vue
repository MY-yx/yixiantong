<template>
  <div class="city-item" @click="onCityClick">
    <span class="city">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import router from "@/router";

const props = defineProps({
  cityInfo: {
    type: Object,
    default() {
      return {};
    },
  },
});
const store = useStore();
const onCityClick = () => {
  store.commit("selectCity", props.cityInfo);
  router.push("/"); // 修改路由
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";
.city-item {
  @include flex-row;
  width: 100%;
  height: 0.5rem;
  padding-left: 0.15rem;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;
}
</style>