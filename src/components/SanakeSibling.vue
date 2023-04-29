<script setup lang="ts">
	import {SharedStateSnakeSibling} from './interfaces/comonProps'
	import { reactive } from 'vue';
	import {Direction} from './interfaces/utilities'
	interface Porps extends SharedStateSnakeSibling{}
	const props= defineProps<Porps>()
	const state = reactive({
		x:props.x,
		y:props.y,
		currentMode:props.currentMode
	})
	function move(){
		switch (state.currentMode){
			case Direction.Right:
				if(state.x<500){
					state.x++
				}else{
					state.x = 0
				}
				break;
			case Direction.Left:
				if(state.x>0){
					state.x--
				}else{
					state.x = 500
				}
				break;
			case Direction.Down:
				if(state.y<500){
					state.y++
				}else{
					state.y = 0
				}
				break;
			case Direction.Up:
				if(state.y>0){
					state.y--
				}else{
					state.y = 500
				}
				break;
		}
	}
	setInterval(move)
</script>
<template>
	<rect id="snake" :x="state.x" :y="state.y" :width="10" :height="10" fill="#996633">
  	</rect>
</template>