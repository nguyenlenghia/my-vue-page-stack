<template>
  <h1>Contact Page</h1>

  <nav>
    <router-link to="/services">Next</router-link>
  </nav>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("Contact is mounted")
})
onUnmounted(() => {
  console.log('Contact is unmounted');
});
onActivated(() => {
  console.log('Contact is activated');
})
onDeactivated(() => {
  console.log('Contact is deactivated');
})
</script>