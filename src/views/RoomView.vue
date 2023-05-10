<template>
    <div class="container">
      <div class="header">
        <button @click="createRoom">create</button>
        <input type="text" v-model="pin" />
        <button @click="joinRoom(pin)">join</button>
        <p v-if="room.gamepin">Current gamepin: {{ room.gamepin }}</p>
        <p v-if="session.user?.username">Current player: {{ session.user?.username }}</p>
        <button @click="leaveRoom">leave</button>
      </div>
      <div class="chat">
        <p v-for="log in room.logs" :key="log.timestamp">
          {{
            new Date(log.timestamp).toLocaleTimeString() +
            " " +
            log.player +
            " " +
            log.action
          }}
        </p>
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
  import { socketServer } from "../composables/useSocket";
  import { useRoom } from "../composables/useRoom";
  import { useSession } from "../composables/useSession";

  const { session } = useSession();
  
  const { room } = useRoom();
  
  export default {
    name: "Room",
    data() {
      return {
        pin: "",
      };
    },
    setup() {
      socketServer.on("roomCreated", (pin: string) => {
        console.log("roomCreated", pin);
      });
      return { room, socketServer, session };
    },
    methods: {
      createRoom() {
        socketServer.emit("create-room");
      },
      leaveRoom() {
        socketServer.emit("leave-room");
      },
      joinRoom(pin: string) {
        socketServer.emit("join-room", pin);
      },
    },
  };
  </script>
  