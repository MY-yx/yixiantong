<template>
  <div class="view-item">
    <router-link :to="{ path: '/Detail', query: { field: 'view', id: data.id } }">
      <div class="image">
        <img class="view-image" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
      </div>
      <div class="other">
        <span class="item">
          ￥<span class="price">{{ data.default_price }}</span> 起
        </span> 
        <span class="item">{{ data.city_name }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
  import Stars from '../Sub/Stars.vue';

  defineProps({
    data: Object
  })
</script>

<style lang="scss" scoped>
  @import "styles/mixins.scss";
  @import "styles/variables.scss";

  .view-item {
    width: 50%;
    padding: .1rem;
    box-sizing: border-box;

    a {
      .image {
        width: 100%;
        height: 1.1rem;
        overflow: hidden;

        .view-image {
          width: 100%;
          min-height: 1.1rem;
        }
      }

      .info {
        padding: .1rem 0;
        box-sizing: border-box;
        .title {
          @include ellipsis;
          height: .3rem;
			    font-size: .16rem;
			    line-height: .3rem;
			    color: #000;
        }

        .stars {
          height: .3rem;
			    line-height: .3rem;
			    font-size: .14rem;
			    color: #ccc;
          .active,
          .score {
            color: $starColor;
          }
        } 
      }

      .other {
        display: flex;
        justify-content: space-between;
        height: .3rem;
        line-height: .3rem;
        .item {
          font-size: .14rem;

          .price {
            font-size: .2rem;
            color: $defaultGreen;
            vertical-align: center;
          }
        }
      }
    }
  }
</style>