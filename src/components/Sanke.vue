<script setup lang="ts">
	import { ref ,computed,defineProps ,reactive, onMounted,onBeforeUnmount} from 'vue';
	import {PropDimensions} from './interfaces/comonProps'
	import {Direction} from './interfaces/utilities'
	import SanakeSibling  from './SanakeSibling.vue';
	import {SharedStateSnakeSibling} from './interfaces/comonProps'
	interface Props{
		points:number,
		dimensions:PropDimensions
	}
	const props = defineProps<Props>()
	const dirMode = ref<Direction>(Direction.Right)
	const position = reactive({
		x:props.dimensions.widthMap/2,
		y:props.dimensions.heightMap/2
	})
	const  handleMovement = (event:KeyboardEvent) => {
		 if (event.keyCode >= 37 && event.keyCode <= 40) {
        // Realizar acciones según la tecla presionada
	    switch (event.keyCode) {
	        case 37: // Tecla izquierda
	           dirMode.value = Direction.Left
	            break;
	        case 38: // Tecla arriba
	           dirMode.value = Direction.Up
	            break;
	        case 39: // Tecla derecha
	           dirMode.value = Direction.Right
	            break;
	        case 40: // Tecla abajo
	           dirMode.value = Direction.Down
	            break;
        	}
		}
	}
	const snakedimensions = computed(()=>{
		let dimensions:PropDimensions  = {heightMap:0,widthMap:0,}
		switch (dirMode.value){
			case Direction.Right:
				dimensions.heightMap = 10
				dimensions.widthMap = 50
				break
			case Direction.Left:
				dimensions.heightMap = 10
				dimensions.widthMap = 50
				break;
			case Direction.Up:
				dimensions.heightMap = 50
				dimensions.widthMap = 10
				break;
			case Direction.Down:
				dimensions.heightMap = 50
				dimensions.widthMap = 10
				break;
		}
		return dimensions
	})
	console.log(snakedimensions.value)
	document.addEventListener('keyup',handleMovement)
	const directions=computed(()=>{
		if (dirMode.value ==  Direction.Right || dirMode.value == Direction.Left){
			return "x"
		}else{
				return "y"
		}	
	})
</script>
<template>
	<SanakeSibling :x="position.x" :y="position.y" :current-mode="dirMode"></SanakeSibling>
</template>

<style scoped>
	line{
		stroke-width: 8px;
		stroke-linecap: round;

	}
</style>