<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{name:'contact'}">Contact</router-link>
    </nav>
    <RouterView/>
    <Header></Header>
</div>
</template>

<style scoped>

</style>
