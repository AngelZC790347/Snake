<script setup lang="ts">
  import Map from './components/Map.vue'
  import { ref } from 'vue';
  const points = ref(0);
  setInterval(()=>{points.value++},1000)
</script>
<template>  
  <h1>Snake</h1>
  <Map :points="points"></Map>
  <p><strong>Score is : {{points}}</strong></p>
</template>

<style scoped>

</style>
