import { loginUserAPI } from "@/api/auth.api";
import { removeUser, setUser, useStore } from "@/store/store";

const authChecker = async () => {
  const isAuthenticated = useStore.getState().isAuthenticated;
  if (!isAuthenticated) {
    try {
      const authUser = await loginUserAPI();

      if (authUser.data?.isError) return { isAuthenticated: false };
      localStorage.setItem("token", authUser?.accessToken);
      setUser(authUser?.user);
      return { isAuthenticated: true };
    } catch (error) {
      console.log(error?.response?.data?.code);
      if (error?.response?.data?.name === "AUTHERROR") {
        console.error("session expired! please login again.");
      }
      console.error("Authorization Error:", error?.response?.data?.message);
      localStorage.removeItem("token");
      removeUser();
      return { isAuthenticated: false };
    }
  }
};

export default authChecker;
