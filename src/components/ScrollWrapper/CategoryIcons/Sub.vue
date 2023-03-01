<template>
  <div class="icon-item">
    <div
      class="icon"
      :style="{
        backgroundColor: bgColor,
      }"
      @click="onRouteTo"
    >
      <span :class="['iconfont', icon]"></span>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const props = defineProps({
  bgColor: String,
  icon: String,
  iconText: {
    type: String,
    default() {
      return "分类";
    },
  },
  field: String,
});

const store = useStore(),
  router = useRouter();

const onRouteTo = () => {
  store.commit("selectField", props.field);
  router.push('/List');
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";
.icon-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: 0.2rem 0;

  .icon {
    @include vh-center;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;

    .iconfont {
      color: #fff;
      font-size: 0.26rem;
    }
  }

  .icon-text {
    margin-top: 0.1rem;
    font-size: 0.14rem;
    text-align: center;
  }
}
</style>