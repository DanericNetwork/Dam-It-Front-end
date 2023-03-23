<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import socketioService from "./services/socketio.service";

export default {
  name: 'App',
  data() {
    return {
      token: ''
    }
  },
  created() {
    socketioService.socket
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
