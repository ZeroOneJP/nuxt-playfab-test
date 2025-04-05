<script setup lang="ts">
  import {PlayFab} from "playfab-sdk";
  import {PlayFabClient} from "playfab-sdk";


  const config = useRuntimeConfig();


  const registerRequest = {
    TitleId: PlayFab.settings.titleId,
    Email: 'test@test.com',
    Password: 'djaksdjaskldj22',
    RequireBothUsernameAndEmail: true,
    Username: 'ZeroOne'
  }

  const test = () => {
    console.log('test');
  }

  function registerUser() {
    console.log('registerUser');
    PlayFab.settings.titleId = config.playFab_titleId;
    PlayFabClient.RegisterPlayFabUser(registerRequest, LoginCall)
  }

  function LoginCall() {
    console.log("Registration successful");
  }
</script>

<template>
  <button v-on:click="test">Register</button>
</template>

<style scoped>

</style>