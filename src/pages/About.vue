<template>
  <h1>About Page</h1>

  {{ count }}
  <button @click="increment">Increment</button>
  
    <nav>
      <router-link to="/contact">Next</router-link>
    </nav>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
};

onMounted(() => {
  console.log("About is mounted")
})
onUnmounted(() => {
  console.log('About is unmounted');
});
onActivated(() => {
  console.log('About is activated');
})
onDeactivated(() => {
  console.log('About is deactivated');
})
</script>