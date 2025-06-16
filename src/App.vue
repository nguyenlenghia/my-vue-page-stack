<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

function onBack() {
  // handle back navigation
  console.log('OnBack navigation triggered');
}

function onForward() {
  // handle forward navigation
  console.log('OnForward navigation triggered');
}
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/services">Services</router-link>
    </nav>
    <!-- <router-view /> -->
     <router-view v-slot="{ Component, route }">
    <vue-page-stack @back="onBack" @forward="onForward">
      <component :is="Component" :key="route.fullPath"></component>
    </vue-page-stack>
  </router-view>
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
