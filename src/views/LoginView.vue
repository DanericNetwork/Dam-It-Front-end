<template>
  <div>
    <h1>login</h1>
    <input type="text" placeholder="username" v-model="username" />
    <button @click="login()">login</button>
  </div>
</template>

<script lang="ts">
import { socketServer } from "../composables/useSocket";
import { useSession } from "../composables/useSession";

const { setSessionId, setSessionUser } = useSession();

export default {
  name: "App",
  data() {
    return {
      auth: false,
      username: "",
    };
  },
  methods: {
    login() {
      socketServer.emit("login-auth", this.username);
    },
  },
  mounted() {
    socketServer.on("authenticated", (data) => {
      setSessionId(data.sessionId);
      setSessionUser(data.user);
      this.$router.push({ name: "Room" });
    });
  },
};
</script>
