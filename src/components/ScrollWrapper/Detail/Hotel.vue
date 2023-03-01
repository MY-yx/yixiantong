<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="Number(star)"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :default-price="default_price"></detail-price>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script setup>
  import DetailName from './Sub/Name.vue';
  import DetailStars from './Sub/Stars.vue';
  import DetailAddress from './Sub/Address.vue';
  import DetailPrice from './Sub/Price.vue';
  import DetailService from './Sub/Service.vue';

  defineProps({
    name: String,
    star: String,
    score: String,
    address: String,
    default_price: String,
    service: Object
  });
</script>