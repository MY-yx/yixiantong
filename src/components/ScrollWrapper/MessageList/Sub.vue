<template>
  <div class="massage-item">
    <router-link :to="{ path: '/Detail', query: { field: 'massage', id: data.id } }">
      <div class="image">
        <img class="massage-image" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="other">
          <span class="item">
            ￥<span class="price">{{ data.default_price }}</span>元
          </span>
          <span class="item">{{ data.city_name }}</span>
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
  .massage-item {
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
        .massage-image {
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
          .score {
            margin-left: .05rem;
            color: $starColor;
          }
        }
        .other {
          display: flex;
          justify-content: space-between;
          font-size: .14rem;
          line-height: .25rem;
          .price {
            color: $starColor;
            font-size: .22rem;
          }
        }
      }
    }
    
  }
</style>