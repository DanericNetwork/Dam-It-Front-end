<template>
    <div class="log-container">
        <h1 class="log-title">Log</h1>
        <div class="log-box">
            <p class="log-message"><strong>Martvdm</strong> - 20:23:12 Moved <strong>B3</strong> to <strong>C4</strong></p>
            <p class="log-message"><strong>Martvdm</strong> - 20:23:12 Moved <strong>B3</strong> to <strong>C4</strong></p>
            <p class="log-message"><strong>Martvdm</strong> - 20:23:12 Moved <strong>B3</strong> to <strong>C4</strong></p>
            <p class="log-message"><strong>Martvdm</strong> - 20:23:12 Moved <strong>B3</strong> to <strong>C4</strong></p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Logs",
}
</script>

<style>
.log-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    border-radius: 25px;
    padding: 10px;
    margin-top: 30px;
}

.log-title {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    margin: 10px 0 20px 0;
    padding: 0;
}

.log-box {
    width: 95%;
    height: 70%;
    background-color: #FFFFFF;
    border-radius: 25px;
    overflow: auto;
    padding: 15px;
    margin: 0;
}

.log-message {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: normal;
    color: #000000;
    margin: 0;
    padding: 0;
}
</style>