import { ref, watch } from "vue";
export interface User {
  id: string;
  username: string;
}

interface Session {
  id: string;
  user?: User;
}

class SessionClass implements Session {
  public id: string = "";
  public user?: User;

  constructor(id = "", user?: User) {
    this.id = id;
    this.user = user;
  }

  public setSessionId(id: string) {
    this.id = id;
  }

  public setSessionUser(user: User) {
    this.user = user;
  }

  public resetSession() {
    this.id = "";
    this.user = undefined;
  }
}

export function useSession() {
  const initialSession = JSON.parse(localStorage.getItem("session") as any);
  const session = ref<SessionClass>(
    initialSession ? new SessionClass(initialSession.id, initialSession.user) : new SessionClass()
  );

  watch(
    session,
    () => {
      if (session.value.id === "") {
        localStorage.removeItem("session");
      } else {
        localStorage.setItem("session", JSON.stringify(session.value));
      }
    },
    { deep: true }
  );

  const setSessionId = (id: string) => {
    session.value.setSessionId(id);
  };

  const setSessionUser = (user: any) => {
    session.value.setSessionUser({ username: user._username, id: user._id });
  };

  const clearSession = () => {
    session.value.resetSession();
  }; 
  return { session, setSessionUser, setSessionId, clearSession };
}
