<script setup lang="ts">

  async function registerUserCall() {
    const { data } = await useFetch('/api/registerUser')
  }
</script>

<template>
  <button v-on:click="registerUserCall">Register</button>
  <p id="text">Notregistered</p>
</template>

<style scoped>

</style>