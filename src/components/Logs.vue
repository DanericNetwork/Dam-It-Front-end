<template>
    <div class="log-container">
      <h1 class="log-title">Log</h1>
      <div class="log-box">
        <div v-for="log in room.logs" :key="log.timestamp" class="log-message-box">
          <p class="log-message">
            <strong>{{ log.username }}</strong> - {{ log.action }}
          </p>
          <p class="log-message-time">{{ formatTimestamp(log.timestamp) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { socketServer } from '../composables/useSocket';
  import { useRoom } from '../composables/useRoom';

  
  const { room, updateLogs } = useRoom();
  
  export default {
    name: 'Logs',
    setup() {
      const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        return `${(date.getHours())}:${(date.getMinutes())}:${(date.getSeconds())}`;
      }
  
      socketServer.on('logs', (data: any) => {
        updateLogs(data);
      });
  
      return { room, formatTimestamp };
    }
  };
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
    border: 2px solid #ed135d;
}

.log-title {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #ed135d;
    margin: 10px 0 20px 0;
    padding: 0;
}

.log-box {
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

.log-message {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: normal;
    color: #000000;
    margin: 0;
    padding: 0;
    width: 100%;
}

.log-message-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
}

.log-message-time {
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