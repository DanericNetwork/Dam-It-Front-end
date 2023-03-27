<template>
  <div class="container">
    <div class="header">
      <button @click="createRoom">create</button>
      <p v-if="gamepin">Current gamepin: {{ gamepin }}</p>
      <button @click="leaveRoom">leave</button>
      
    </div>
      <div class="chat">
        </div>
  </div>
</template>

<style>
.room {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.chat { 
  /* Chat box where all messages come in */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 80vh;
  width: 100%;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.input {
  /* Input field for messages */
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}
</style>

<script lang="ts">
import socketioService from "./services/socketio.service";
import { useGamepin } from "./composables/useGamepin";

const { gamepin, setGamepin } = useGamepin();

const socket = socketioService.socket;

export default {
  name: "App",
  setup() {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("recover-room");
    });
    socket.on("roomCreated", (pin) => {
      console.log("roomCreated", pin);
      setGamepin(pin);
    });
    socket.on("roomRecovered", (pin) => {
      console.log("roomRecovered", pin);
      setGamepin(pin);
    });
    socket.on("roomJoined", (pin) => {
      console.log("roomJoined", pin);
      setGamepin(pin);
    });
    socket.on("roomLeft", (pin) => {
      console.log("roomLeft", pin);
      setGamepin("");
    });
    socket.on("disconnect", () => {
      setGamepin("");
    });
    socket.on("error", (error) => {
      console.error(error);
    });

    return { gamepin, setGamepin };
  },

  methods: {
    createRoom() {
      socket.emit("create-room");
    },
    leaveRoom() {
      socket.emit("leave-room");
    },
  },
};
</script>
