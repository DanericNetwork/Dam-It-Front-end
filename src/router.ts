import { createRouter, createWebHistory } from "vue-router";
import { socketServer } from "./composables/useSocket";
import { useSession } from "./composables/useSession";

const router = createRouter({
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

const { clearSession, session } = useSession();

export async function CheckAuth(): Promise<boolean> {
  socketServer.emit("check-auth", session.value.id);
  console.log(session.value.id);
  return new Promise((resolve) => {
    socketServer.on("auth", (response: boolean) => {
      console.log(response);
      if (response) {
        console.log("Authenticated");
        console.log(session.value.user?.username);
        resolve(true);
      } else {
        console.log("Not authenticated");
        session.value.resetSession();
        resolve(false);
      }
    });
  });
}

router.beforeResolve(async (to, from, next) => {
  if (to.name !== "Login" && !(await CheckAuth())) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;