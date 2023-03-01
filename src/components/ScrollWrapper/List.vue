<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list
          v-if="field === 'view'"
          :viewDatas="listData[cityId]"
        ></view-list>
        <food-list
          v-if="field === 'food'"
          :foodDatas="listData[cityId]"
        ></food-list>
        <hotel-list
          v-if="field === 'hotel'"
          :hotelDatas="listData[cityId]"
        ></hotel-list>
        <ktv-list
          v-if="field === 'ktv'"
          :ktvDatas="listData[cityId]"
        ></ktv-list>
        <massage-list
          v-if="field === 'massage'"
          :massageDatas="listData[cityId]"
        ></massage-list>
        <loading :loading-show="loadingShow"></loading>
      </div>
      <error-show :show-error="errorShow"></error-show>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, reactive, onMounted, computed, watch, onActivated } from "vue";
import useBetterScroll from "hooks/useBetterScroll.js";
import ListModel from "../../models/list";
import Tool from "@/utils/tool.js";
import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import MassageList from "./MessageList/Index.vue";
import Loading from "./Sub/Loading.vue";
import ErrorShow from "./Sub/Error.vue";

const wrapper = useBetterScroll(),
  store = useStore();

let cityId = computed(() => store.state.cityId),
  field = computed(() => store.state.field),
  listData = reactive({}),
  loadingShow = ref(true),
  errorShow = ref(false);

const queryListDatas = (cityId, field) => {
  if (!listData[cityId]) {
    // 没有缓存, 需要请求拿数据
    loadingShow.value = true;
    new ListModel()
      .getListDatas(cityId, field)
      .then((res) => {
        const data = Tool.formatJSON(res, "keyword");
        errorShow.value = false;
        setTimeout(() => {
          /**
           * listData: {
           *   0: [],
           *   1: [],
           *   ...
           * }
           * 对于分页的组织好还是留一份缓存
           */
          listData[cityId] = data;
          loadingShow.value = false;
        }, 500);
      })
      .catch((err) => {
        errorShow.value = true;
      });
  } else {
    // 直接不处理, 反正缓存在 => 这个页面就不需要缓存了
  }
};

onMounted(() => {
  queryListDatas(cityId.value, field.value);
});

onActivated(() => {
  console.log('actived')
})
watch(cityId, () => {
  queryListDatas(cityId.value, field.value);
});
</script>

<style lang="scss" scoped></style>