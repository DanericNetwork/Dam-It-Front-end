<template>
    <div class="chat-container">
        <h1 class="chat-title">Chat</h1>
        <div class="chat-box">
            <div class="chat-message-box">
                <p class="chat-message">Mart: Wanneer starten?</p>
                <p class="chat-message-time">20:23</p>
            </div>
            <div class="chat-message-box">
                <p class="chat-message">You: We starten zometeen</p>
                <p class="chat-message-time">20:23</p>
            </div>
            <div class="chat-message-box">
                <p class="chat-message">Mart: Wanneer stoppen?</p>
                <p class="chat-message-time">20:23</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Chat",
}
</script>

<style>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    border-radius: 25px;
    padding: 10px;
    border: 2px solid #ed135d;
}

.chat-title {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #ed135d;
    margin: 10px 0 20px 0;
    padding: 0;
}

.chat-box {
    width: 95%;
    height: 200px;
    background-color: #FFFFFF;
    border-radius: 25px;
    overflow: auto;
    padding: 15px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.chat-message {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: normal;
    color: #000;
    margin: 0;
    padding: 0;
    width: 100%;
}

.chat-message-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
}

.chat-message-time {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: normal;
    color: #000000;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    justify-content: flex-end;
}
</style>