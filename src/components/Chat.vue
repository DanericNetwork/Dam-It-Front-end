<template>
    <div class="chat-container">
      <h1 class="chat-title">Chat</h1>
      <div class="chat-box">
        <div class="chat-message-box" v-for="(message, index) in room.chats" :key="index">
          <p class="chat-message">{{ message.username === session.user.username ? 'You' : message.username }}: {{ message.message }}</p>
          <p class="chat-message-time">{{ formatTime(message.timestamp) }}</p>
        </div>
      </div>
      <div class="chat-form">
        <input type="text" @keyup.enter="sendMessage" v-model="newMessage" class="chat-input" placeholder="Type your message here...">
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { useSession } from '../composables/useSession';
  import { useRoom } from '../composables/useRoom';
  import { socketServer } from '../composables/useSocket';
  
  interface ChatMessage {
    username: string;
    message: string;
    timestamp: number;
  }
  
  export default {
    name: 'Chat',
    props: {
      messages: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const { session } = useSession();
      const { room, updateChats } = useRoom();
      const newMessage = ref('');
  
      const formatTime = (timestamp: number): string => {
        const date = new Date(timestamp);
        return `${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`;
      };
  
      const sendMessage = (): void => {
        if (newMessage.value.trim() !== '') {
          socketServer.emit('send-chat', newMessage.value);
          newMessage.value = '';
        }
      };
  
      onMounted(() => {
        socketServer.on('messages', (messages: any) => {
          updateChats(messages);
        });
      });
  
      return {
        session,
        room,
        newMessage,
        formatTime,
        sendMessage,
      };
    },
  };
  </script>
  
  <style>
  .chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    border-radius: 25px;
    padding: 10px;
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
    background-color: #ffffff;
    border-radius: 25px;
    overflow-y: scroll !important;
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
    }

    .chat-message-time {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: normal;
    color: #000000;
    margin: 0;
    padding: 0;
    }

    .chat-message-box {
    margin: 5px 0;
    padding: 0;
    }
    

    /* Style input and button next to eachother and rounded */
    .chat-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 10px 0 0 0;
    padding: 0;
    }

    .chat-input {
    width: 100%;
    height: 30px;
    border-radius: 25px;
    border: 1px solid #000000;
    padding: 0 10px;
    margin: 0;
    }
    </style>