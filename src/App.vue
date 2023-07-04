<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cards from './components/Cards.vue';
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
        <div class="container">
          <Cards/>
        </div>
        <RouterView />
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
</style>