<template>
  <swiper :pagination="pagination" :scrollbar="scrollbar">
    <swiper-slide v-for="item in picDatas" :key="item">
      <img class="swiper-img" :src="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

defineProps({
  picDatas: {
    type: Array
  },
});

const pagination = {
    clickable: true,
  },
  scrollbar = {
    draggable: true,
  };
</script>

<style lang="scss" scoped>
.swiper-slide {
  /** 
  这里你是需要制定好容器大小的； 
  因为图片都是商家自己上传的,你也讲不好他的大小 */
  height: 2rem;
  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>