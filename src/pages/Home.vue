<template>
  <h1>Home Page</h1>

  <div>
    <input type="text" />
  </div>
    <nav>
      <router-link to="/about">Next</router-link>
    </nav>

</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("Home is mounted")
})
onUnmounted(() => {
  console.log('Home is unmounted');
});
onActivated(() => {
  console.log('Home is activated');
})
onDeactivated(() => {
  console.log('Home is deactivated');
})
</script>