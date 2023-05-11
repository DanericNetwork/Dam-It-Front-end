import { ref, watch } from "vue";

interface Room {
  gamepin: string;
  logs: any[];
  chats: any[];
}

class RoomClass implements Room {
  gamepin = "";
  logs = [];
  chats = [];
}

export function useRoom() {
  const room = ref<Room>(new RoomClass());

  const setGamepin = (pin: string) => {
    room.value.gamepin = pin;
  };

  const updateLogs = (data: any) => {
    data.forEach((chat: any) => {
      if (chat.action === "join") {
        chat.action = "Joined";
      } else if (chat.action === "leave") {
        chat.action = "Left";
      } else if (chat.action === "create") {
        chat.action = "Created";
      } else if (chat.action === "disconnect") {
        chat.action = "Disconnected";
      } else if (chat.action === "reconnect") {
        chat.action = "Reconnected";
      }
    }
    );
    room.value.logs = data;
  };

  const updateChats = (data: any) => {
    room.value.chats = data;
  };

  const resetRoom = () => {
    room.value = new RoomClass();
  };

  return { room, setGamepin, updateChats, updateLogs, resetRoom };
}
