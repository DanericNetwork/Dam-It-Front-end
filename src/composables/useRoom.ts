import { ref, watch } from "vue";

interface Room {
  gamepin: string;
  logs: any[];
}

class RoomClass implements Room {
  gamepin = "";
  logs = [];
}

export function useRoom() {
  const room = ref<Room>(new RoomClass());

  const setGamepin = (pin: string) => {
    room.value.gamepin = pin;
  };

  const updateLogs = (data: any) => {
    room.value.logs = data;
  };

  const resetRoom = () => {
    room.value = new RoomClass();
  };

  const savedRoom = sessionStorage.getItem("room");
  if (savedRoom) {
    room.value = JSON.parse(savedRoom);
  }

  return { room, setGamepin, updateLogs, resetRoom };
}
