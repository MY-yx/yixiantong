<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router/index";
const onRouteBack = () => {
    router.go(-1);
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.back-ward {
    position: absolute;
    top: 0;
    left: 0;
    @include flex-row;
    @include vh-center;
    height: $headerHeight;

    .iconfont {
      font-size: .2rem;
    }
  }
</style>