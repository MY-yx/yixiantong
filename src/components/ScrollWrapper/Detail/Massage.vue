<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="Number(star)"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :default-price="default_price"></detail-price>
    <detail-open-date-time :date-time="open_datetime"></detail-open-date-time>
    <detail-comment-keyword :comment_keyword="comment_keyword"></detail-comment-keyword>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script setup>
  import DetailName from './Sub/Name.vue';
  import DetailStars from './Sub/Stars.vue';
  import DetailAddress from './Sub/Address.vue';
  import DetailPrice from './Sub/Price.vue';
  import DetailOpenDateTime from './Sub/OpenDateTime.vue';
  import DetailCommentKeyword from './Sub/CommentKeyWord.vue';
  import DetailService from './Sub/Service.vue';

  defineProps({
    name: String,
    star: String,
    score: String,
    address: String,
    default_price: String,
    service: Object,
    open_datetime: String,
    comment_keyword: Array
  });
</script>