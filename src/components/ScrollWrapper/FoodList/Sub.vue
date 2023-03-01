<template>
  <div class="food-item">
    <router-link :to="{ path: '/Detail', query: { field: 'food', id: data.id } }">
      <div class="image">
        <img class="food-image" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">{{ data.default_price }}/人</span>
        </p>
        <p class="keyword">
          <span class="badge" v-for="item of data.keyword" :key="item">{{ item }}</span>
        </p>
        <p class="other">
          <span class="item">{{ data.field }}</span>
          <span class="item">{{ data.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
  import Stars from '../Sub/Stars.vue';
  defineProps({
    data: Object
  });
</script>

<style lang="scss" scoped>
  @import "styles/mixins.scss";
  @import "styles/variables.scss";
  .food-item {
    position: relative;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    a {
      @include flex-row;
      .image {
        width: 1.2rem;
        height: 1.2rem;
        padding: .1rem;
        box-sizing: border-box;
        .food-image {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: .1rem .1rem 0 1.2rem;
        box-sizing: border-box;
        .title {
          @include ellipsis;
          font-size: .18rem;
          color: #000;
          line-height: .2rem;
        }
        .stars {
          font-size: .14rem;
          line-height: .3rem;
          .price {
            margin-left: .05rem;
            color: #333;
          }
        }
        .keyword {
          height: .3rem;
          line-height: .2rem;
          overflow: hidden;
          .badge {
            display: inline-block;
            padding: 0 .05rem;
            margin-left: 0.05rem;
            color: rgba(190, 158, 77);
            background-color: rgba(251, 244, 288);
            font-size: .14rem;
          }
        }
        .other {
          display: flex;
          justify-content: space-between;
          font-size: .14rem;
          line-height: .25rem;
        }
      }
    }
    
  }
</style>