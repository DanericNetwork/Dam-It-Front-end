<template>
  <div class="container" v-if="room.gamepin">
      <div class="board-container">
          <checkers-board :gamepin="room.gamepin" :username="session.user?.username" />
      </div>
      <div class="side-container">
          <chat />
          <logs />
      </div>
  </div>
  <div v-if="!room.gamepin">
      <button @click="createRoom">Create Room</button>
      <button @click="joinRoom('9518')">Join Room</button>
  </div>
</template>

<script lang="ts">
import CheckersBoard from "../components/CheckersBoard.vue";
import Logs from "../components/Logs.vue";
import Chat from "../components/Chat.vue";
import { socketServer } from "../composables/useSocket";
  import { useRoom } from "../composables/useRoom";
  import { useSession } from "../composables/useSession";

  const { session } = useSession();
  
  const { room, setGamepin } = useRoom();
export default {
  
  name: "RoomView",
  components: {
      CheckersBoard,
      Logs,
      Chat,
  },
  setup() {
      socketServer.emit("recover-room");
      socketServer.on("roomCreated", (pin: string) => {
        console.log("roomCreated", pin);
      });
      socketServer.on("roomJoined", (pin: string) => {
        setGamepin(pin);
      });
      socketServer.on("roomRecovered", (pin: string) => {
        setGamepin(pin);
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
}
};
</script>

<style>
body {
  margin: 0;
  padding: 30px;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.board-container {
  width: 60%;
}
.side-container {
  width: 40%;
}
</style>
  
  