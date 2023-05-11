import { createRouter, createWebHistory } from "vue-router";
import { socketServer } from "./composables/useSocket";
import { useSession } from "./composables/useSession";

export  const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Room",
      path: "/room",
      component: () => import("./views/RoomView.vue"),
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("./views/LoginView.vue"),
    },
  ],
});

const { session, sessionLoaded } = useSession();

export async function CheckAuth(): Promise<boolean> {
  await new Promise((resolve) => {
    const checkSessionLoaded = setInterval(() => {
      if (sessionLoaded.value) {
        clearInterval(checkSessionLoaded);
        return true;
      }
    }, 100);
  });

  socketServer.emit("check-auth", session.value.id);
  return new Promise((resolve) => {
    socketServer.on("auth", (response: boolean) => {
      console.log(response);
      if (response) {
        console.log("Authenticated");
        console.log(session.value.user?.username);
        resolve(true);
      } else {
        console.log("Not authenticated");
        router.push("/login");
        session.value.resetSession();
        resolve(false);
      }
    });
  });
}
