<template>
  <h1>Services Page</h1>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("Services is mounted")
})
onUnmounted(() => {
  console.log('Services is unmounted');
});
onActivated(() => {
  console.log('Services is activated');
})
onDeactivated(() => {
  console.log('Services is deactivated');
})
</script>