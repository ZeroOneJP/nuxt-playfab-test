<script setup lang="ts">
  import rButton from '../components/registerButton.vue'

  const testing = () => {
    console.log('testing')
  }
</script>

<template>
  <rButton />
  <button @click="testing">Tester</button>
</template>

<style scoped>

</style>