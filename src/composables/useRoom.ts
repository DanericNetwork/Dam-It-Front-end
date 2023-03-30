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


  watch(
    room,
    () => {
      sessionStorage.setItem("room", JSON.stringify(room.value));
    },
    { deep: true }
  );

  const setGamepin = (pin: string) => {
    room.value.gamepin = pin;
  };

  const updateLogs = (data: any) => {
    room.value.logs = data;
  };

  const updateChats = (data: any) => {
    room.value.chats = data;
  };

  const resetRoom = () => {
    room.value = new RoomClass();
  };

  const savedRoom = sessionStorage.getItem("room");
  if (savedRoom) {
    room.value = JSON.parse(savedRoom);
  }

  return { room, setGamepin, updateLogs, resetRoom, updateChats };
}
