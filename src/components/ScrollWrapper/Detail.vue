<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <detail-swiper :pic-datas="detailData.pics"></detail-swiper>
        <detail-view v-if="field === 'view'" v-bind="detailData"></detail-view>
        <detail-food v-if="field === 'food'" v-bind="detailData"></detail-food>
        <detail-hotel v-if="field === 'hotel'" v-bind="detailData"></detail-hotel>
        <detail-massage v-if="field === 'massage'" v-bind="detailData"></detail-massage>
        <detail-ktv v-if="field === 'ktv'" v-bind="detailData"></detail-ktv>
      </div>
      <error :show-error="errorShow"></error>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onActivated } from "vue";
import { useRoute } from "vue-router";
// 组件
import DetailView from "./Detail/View.vue";
import DetailFood from "./Detail/Food.vue";
import DetailHotel from "./Detail/Hotel.vue";
import DetailMassage from "./Detail/Massage.vue";
import DetailKtv from "./Detail/Ktv.vue";
import DetailSwiper from "./Sub/Swiper.vue";
import Error from "./Sub/Error.vue";
// js
import useBetterScroll from "hooks/useBetterScroll.js";
import DetailModel from "models/detail";
import Tool from "@/utils/tool.js";

let route = useRoute(),
  wrapper = useBetterScroll();

let detailData = reactive({}),
  errorShow = ref(true),
  id = ref(route.query.id),
  field = ref(route.query.field);

const getDetail = (field, id) => {
  errorShow.value = true;
  new DetailModel()
    .getDetailData(field, id)
    .then((res) => {
      res.pics && (res.pics = Tool.jsonToArr(res.pics));
      res.comment_keyword && (res.comment_keyword = Tool.strToArr(res.comment_keyword));
      res.recom && (res.recom = Tool.replaceToSpace(res.recom));
      res.service && (res.service = Tool.jsonToArr(res.service));
      errorShow.value = false;
      detailData = res;
    })
    .catch((err) => {
      errorShow.value = true;
    })
};

onMounted(() => {
  getDetail(field.value, id.value);
});

onActivated(() => {
  route = useRoute();
  // 这里需要的操作: 确认id和field是否改变, 没改变的话就不重新请求了, 改变了再请求
  let currentId = route.query.id,
    currentField = route.query.field;
  if (currentField !== field.value || currentId !== id.value) {
    id.value = currentId;
    field.value = currentField;
    getDetail(currentField, currentId);
  }
});
</script>

<style lang="scss" scoped>
</style>