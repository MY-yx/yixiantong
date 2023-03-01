<template>
  <div class="intro-bd">
    <detail-title icon="icon-intro" title="详细介绍"></detail-title>
    <span class="intro-text">{{ intro }}</span>
  </div>
</template>

<script setup>
  import DetailTitle from './Title.vue';
  defineProps({
    intro: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';

.intro-bd {
	@include flex-column;
	margin-top: .1rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	.intro-text {
		padding: .1rem .15rem;
		font-size: .14rem;
		line-height: .18rem;
		box-sizing: border-box;
		text-indent: 2em;
	}
}	
</style>