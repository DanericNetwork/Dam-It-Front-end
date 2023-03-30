<template>
  <div class="container">
    <div class="header">
      <button @click="createRoom">create</button>
      <input type="text" v-model="pin" />
      <button @click="joinRoom()">join</button>
      <p v-if="room.gamepin">Current gamepin: {{ room.gamepin }}</p>
      <button @click="leaveRoom">leave</button>
    </div>
    <div class="chat">
      <p v-for="chat in room.chats" :key="chat.userId">{{ chat.message }}</p>
      <div>
   <input type="text" v-model="message">
   <button @click="sendMessage">send</button>
      </div>
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
import { useRoom } from "./composables/useRoom";

const { room, setGamepin, resetRoom, updateLogs, updateChats } = useRoom();
const socket = socketioService.socket;

export default {
  name: "App",
  data() {
    return {
      pin: "",
      message: "",
    };
  },
  setup() {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("recover-room");
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("roomJoined", (pin) => {
      console.log("roomJoined", pin);
      setGamepin(pin);
    });

    socket.on("roomRecovered", (pin) => {
      setGamepin(pin);
    });

    socket.on("noRoomRecovered", () => {
      console.log("noRoomRecovered");
      resetRoom();
    });

    socket.on("roomLeft", (data) => {
      resetRoom();
    });

    socket.on("logs", (data) => {
      updateLogs(data);
    });

    socket.on("messages", (data) => {
      updateChats(data);
    
      console.log(data);
    });

    socket.on("error", (data) => {
      console.log(data);
    });
    return { room, setGamepin, resetRoom, updateLogs };
  },
  methods: {
    createRoom() {
      socket.emit("create-room");
    },
    leaveRoom() {
      socket.emit("leave-room");
    },
    joinRoom() {
      socket.emit("join-room", this.pin);
    },
    sendMessage() {
      socket.emit("send-chat", this.message);
      this.message = "";
      console.log(this.message);
  
    },
  },
};
</script>
