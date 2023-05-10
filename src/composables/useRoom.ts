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
    room.value.logs = data;
  };

  const updateChats = (data: any) => {
    room.value.chats = data;
    console.log(room.value.chats);
  };

  const resetRoom = () => {
    room.value = new RoomClass();
  };

  return { room, setGamepin, updateChats, updateLogs, resetRoom };
}
