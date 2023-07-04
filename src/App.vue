<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cards from './components/Cards.vue';
</script>

<template>
        <RouterLink to="/">Home</RouterLink>
        <Cards/>
  <RouterView />
</template>

<style scoped>

</style>
