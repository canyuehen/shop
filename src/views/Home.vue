<template>
	<div id="home">
		<span class="icon-down"></span>
		<span class="icon-clock"></span>
		<span class="icon-book2"></span>
		<com-one :messAge1="message"></com-one>
	</div>
</template>

<script>

	import comone from '@/components/comone.vue';

export default {
	data () {
		return {
			message:"我是父元素的内容111222"
		};
	},
	mounted () {

	},
	components:{
		'com-one':comone
	}
};
</script>

<style></style>
