<script setup lang="ts">
  import rButton from '../components/registerButton.vue'

  const testing = () => {
    console.log('testing')
  }
</script>

<template>
  <form id="loginForm">
    <label for="username">Username or Email:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Login</button>
    <button type="reset">Reset</button>

    <p><a href="#">Forgot Password?</a></p>
    <p><a href="#">Register</a></p>
  </form>

  <rButton />
  <button @click="testing">Tester</button>
</template>

<style scoped>

</style>