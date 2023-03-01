<template>
  <!-- 这个数据结构一定是两层; mounted阶段挂载 -->
  <div class="scroll-wrapper" ref="wrapper">
    <!-- 滚动区域内容 -->
    <div class="scroll-content">
      <category-icons></category-icons>
      <!--
        但并不是所有的样式都一样, 要区分;
        还要思考一个问题, 可不可以把这部分合并成一个组件 （√）
        => 每个组件都是单独的功能, 如果之后需要修改样式, 那只需要在单独的xxxList里面修改; 这里可接受的开发耗时
      -->
      <div v-if="!errorShow">
        <div class="view-block">
          <home-title :title="homeTitle.viewTitle"></home-title>
          <view-list :view-datas="homeDatas.viewDatas"></view-list>
        </div>
        <div class="food-block">
          <home-title :title="homeTitle.foodTitle"></home-title>
          <food-list :food-datas="homeDatas.foodDatas"></food-list>
        </div>
        <div class="hotle-block">
          <home-title :title="homeTitle.hotelTitle"></home-title>
          <hotel-list :hotel-datas="homeDatas.hotelDatas"></hotel-list>
        </div>
        <div class="ktv-block">
          <home-title :title="homeTitle.ktvTitle"></home-title>
          <ktv-list :ktv-datas="homeDatas.ktvDatas"></ktv-list>
        </div>
        <div class="message-block">
          <home-title :title="homeTitle.massageTitle"></home-title>
          <massage-list :massage-datas="homeDatas.massageDatas"></massage-list>
        </div>
      </div>
      <error :show-error="errorShow"></error>
    </div>
  </div>
</template>

<script setup>
// 库
import { onMounted, computed, onActivated } from "vue";
import { useStore } from "vuex";
// 组件
import CategoryIcons from "./CategoryIcons/Index.vue";
import HomeTitle from "./Sub/HomeTitle.vue";
import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import MassageList from "./MessageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import Error from "components/ScrollWrapper/Sub/Error.vue";
// js
import IndexModel from "models/index.js";
import useBetterScroll from "hooks/useBetterScroll.js";
import useState from 'hooks/useState.js';
import useReactive from 'hooks/useReactive.js';
import { homeTitle, homeDataTpl } from "@/utils/config.js";
import Tool from "@/utils/tool.js";

const store = useStore(),
  [homeDatas, homeDataRefs, homeDataSetter] = useReactive(homeDataTpl),
  wrapper = useBetterScroll(),
  [errorShow, errorShowSetter] = useState(false),
  [currentCityId, currentCityIdSetter] = useState('')

const getHomeData = (cityId) => {
  new IndexModel().getHomeDatas(cityId).then((res) => {
    homeDataSetter({
      foodDatas: Tool.formatJSON(res.foodDatas, "keyword"),
      hotelDatas: res.hotelDatas,
      ktvDatas: res.ktvDatas,
      massageDatas: res.massageDatas,
      viewDatas: res.viewDatas,
    })
  }).catch((err) => errorShowSetter(() => true))
};

// 开启了keep-alive之后只会进到一次mounted, 之后每次都是进actived
onMounted(() => {
  const cityId = store.state.cityId;
  currentCityIdSetter(cityId);
  getHomeData(cityId);
});

onActivated(() => {
  const cityId = store.state.cityId;
  if (currentCityId.value != cityId) {
    currentCityIdSetter(cityId);
    getHomeData(cityId);
  }
});
</script>

<style>
</style>