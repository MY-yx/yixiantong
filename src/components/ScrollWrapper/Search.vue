<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <no-data-tip v-if="!hasData"></no-data-tip>
      <div v-else>
        <div v-if="viewDatas.length > 0">
          <home-title title="景点结果："></home-title>
          <view-list :viewDatas="viewDatas"></view-list>
        </div>
        <div v-if="foodDatas.length > 0">
          <home-title title="美食结果："></home-title>
          <food-list :foodDatas="foodDatas"></food-list>
        </div>
        <div v-if="hotelDatas.length > 0">
          <home-title title="酒店结果："></home-title>
          <hotel-list :hotelDatas="hotelDatas"></hotel-list>
        </div>
        <div v-if="massageDatas.length > 0">
          <home-title title="按摩结果："></home-title>
          <massage-list :massageDatas="massageDatas"></massage-list>
        </div>
        <div v-if="ktvDatas.length > 0">
          <home-title title="KTV结果："></home-title>
          <ktv-list :ktvDatas="ktvDatas"></ktv-list>
        </div>
        <error-show :show-error="hasError"></error-show>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useBetterScroll from 'hooks/useBetterScroll.js';
  import NoDataTip from './Sub/NoDataTip.vue';
  import HomeTitle from './Sub/HomeTitle.vue';
  import ViewList from './ViewList/Index.vue';
  import FoodList from './FoodList/Index.vue';
  import HotelList from './HotelList/Index.vue';
  import KtvList from './KtvList/Index.vue';
  import MassageList from './MessageList/Index.vue';
  import ErrorShow from './Sub/Error.vue';
  
  defineProps({
    hasError: Boolean,
    hasData: Boolean,
    foodDatas: {
      type: Array,
      default() {
        return []
      }
    },
    massageDatas: {
      type: Array,
      default() {
        return []
      }
    },
    hotelDatas: {
      type: Array,
      default() {
        return []
      }
    },
    viewDatas: {
      type: Array,
      default() {
        return []
      }
    },
    ktvDatas: {
      type: Array,
      default() {
        return []
      }
    }
  })

  const wrapper = useBetterScroll();

</script>

<style lang="scss" scoped>

</style>