import { ref, watch } from "vue";

interface User {
  userId: string;
  username: string;
}

class UserClass implements User {
  userId = "";
  username = "";
}

export function useUser() {
  const user = ref<User>(new UserClass());

  watch(
    user,
    () => {
      localStorage.setItem("user", JSON.stringify(user.value));
    },
    { deep: true }
  );

  const setUserId = (id: string) => {
    user.value.userId = id;
  };

  const setUsername = (name: string) => {
    user.value.username = name;
  };

  const resetUser = () => {
    user.value = new UserClass();
  };

  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    user.value = JSON.parse(savedUser);
  }

  return { user, setUserId, setUsername, resetUser };
}
