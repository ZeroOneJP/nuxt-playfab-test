<script setup lang="ts">
  function writetoConsole() {
    console.log("Test")
  }
</script>

<template>
  <NuxtLink to="/login">Login</NuxtLink>
  <button v-on:click="writetoConsole">Test</button>
</template>

<style scoped>

</style>