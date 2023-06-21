<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const app = document.getElementById('app');
  if (app && !app.classList.contains('full')) {
    app.classList.add('full')
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
html, body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app.full {
  width: 100%;
  height: 100%;
}
</style>
