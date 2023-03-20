<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { io } from "socket.io-client";

export default {
  name: 'App',
  data() {
    return {
      token: ''
    }
  },
  created() {
    io("http://localhost:3000", {
        auth: {
            token: "test"
        }
    });
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
