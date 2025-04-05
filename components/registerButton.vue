<script setup lang="ts">

const userName = ref("")
const password = ref("")
const email = ref("")

    async function registerUserCall() {
      console.log("Sended request")
      const response = await $fetch('/api/registerUser', {
        method: 'POST',
        body: {
          DisplayName: userName.value,
          Email: email.value,
          Password: password.value,
          RequireBothUsernameAndEmail: true,
          Username: userName.value
        }
      })
    }
</script>

<template>
  <form id="loginForm">
    <label for="username">Username or Email:</label>
    <input v-model="userName" class="loginInput" type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input v-model="password" class="loginInput" type="password" id="password" name="password" required>

    <label for="password">E-Mail:</label>
    <input v-model="email" class="loginInput" type="email" id="email" name="email" required>

    <button @click="registerUserCall" type="submit">Login</button>
    <button type="reset">Reset</button>

    <p><a href="#">Forgot Password?</a></p>
    <p><a href="#">Register</a></p>
  </form>

  <button v-on:click="registerUserCall">Register</button>
</template>

<style scoped>

</style>