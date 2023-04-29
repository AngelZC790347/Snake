<script setup lang="ts">
	import Snake from './Sanke.vue'
	// import {PropsGlobalState} from './interfaces/comonProps'
	import { ref,reactive, computed } from 'vue';
	interface Props{
		points : number
	}
	const props = defineProps<Props>()
	const dimensions = reactive({
		heightMap	: "500px",
		widthMap	: "500px"
	})
	const dimensionsNumber ={		
		heightMap: parseInt(dimensions.heightMap.slice(0,dimensions.heightMap.length-2)),
		widthMap : parseInt(dimensions.widthMap.slice(0,dimensions.widthMap.length-2))
		
	}
</script>
<template>
	<svg class="map">		
		<Snake :points="props.points" :dimensions="dimensionsNumber"></Snake>			
	</svg>
</template>

<style scoped>
	.map{
		background-color: #c9f2de;
		min-height: v-bind("dimensions.heightMap");
		min-width : v-bind("dimensions.widthMap");
	}
</style>