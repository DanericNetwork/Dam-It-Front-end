<template>
    <div class="container">
        <div class="board-container">
            <checkers-board :board={} />
        </div>
        <div class="side-container">
            <chat />
            <logs />
        </div>
    </div>
</template>

<script lang="ts">
import CheckersBoard from "../components/CheckersBoard.vue";
import Logs from "../components/Logs.vue";
import Chat from "../components/Chat.vue";
export default {
    name: "GameView",
    components: {
        CheckersBoard,
        Logs,
        Chat,
    },
}
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