import { ref } from "vue";

export function useGamepin() {
  const gamepin = ref<string>(sessionStorage.getItem("roomId") || "");
  const setGamepin = (pin: string) => {
    sessionStorage.setItem("roomId", pin);
    
    gamepin.value = pin;
  };
  return { gamepin, setGamepin };
}
