import api from "@/api/baseApi";
import { useStore } from "@/store/store";

const authChecker = async () => {
  const { isAuthenticated, setUser, removeUser } = useStore().getState();
  if (!isAuthenticated) {
    try {
      const authUser = await api.get("/auth/me");

      if (authUser.data?.isError) return null;

      const loginUser = authUser.data?.data;
      localStorage.setItem("token", loginUser?.accessToken);
      setUser(loginUser);
      return { isAuthenticated: true };
    } catch (error) {
      console.log(error?.response?.data?.code);
      if (error?.response?.data?.name === "AUTHERROR") {
        console.error("session expired! please login again.");
      }
      console.error("Authorization Error:", error?.response?.data?.message);
      localStorage.removeItem("token");
      removeUser();
      return null;
    }
  }
};

export default authChecker;
