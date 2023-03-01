<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="Number(star)"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :default-price="default_price"></detail-price>
    <detail-open-date-time :date-time="open_datetime"></detail-open-date-time>
    <detail-tip :tip="tip"></detail-tip>
    <detail-intro :intro="intro"></detail-intro>
    <detail-ticket-info :ticketInfo="ticket_info"></detail-ticket-info>
  </div>
</template>

<script setup>
  import DetailName from './Sub/Name.vue';
  import DetailStars from './Sub/Stars.vue';
  import DetailAddress from './Sub/Address.vue';
  import DetailPrice from './Sub/Price.vue';
  import DetailOpenDateTime from './Sub/OpenDateTime.vue';
  import DetailTip from './Sub/Tip.vue';
  import DetailIntro from './Sub/Intro.vue';
  import DetailTicketInfo from './Sub/TicketInfo.vue';

  defineProps({
    name: String,
    star: String,
    score: String,
    address: String,
    open_datetime: String,
    default_price: String,
    tip: String,
    intro: String,
    ticket_info: String
  });
</script>