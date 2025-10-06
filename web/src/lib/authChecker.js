import api from "@/api/baseApi";
import useAuthStore from "@/store/authStore";

const authChecker = async () => {
  const { setUser, removeUser } = useAuthStore.getState();
  try {
    const authUser = await api.get("/auth/me");
    if (authUser.data?.isSuccess) {
      const loginUser = authUser.data?.data;
      setUser(loginUser);
      return { isAuthenticated: true, user: loginUser };
    } else {
      removeUser();
      return { isAuthenticated: false, user: null };
    }
  } catch (error) {
    console.error("Authorization Error:", error.response?.data?.message);
    removeUser();
    return { isAuthenticated: false, user: null };
  }
};

export default authChecker;
