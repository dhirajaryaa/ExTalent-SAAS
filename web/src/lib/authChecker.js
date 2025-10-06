import api from "@/api/baseApi";
import authStore from "@/store/authStore";

const authChecker = async () => {
  const { setUser, removeUser } = authStore.getState();
  try {
    const authUser = await api.get("/auth/me");
    if (authUser.data?.isSuccess) {
      const loginUser = authUser.data?.data;
      setUser(loginUser?.user);
      localStorage.setItem("token", loginUser?.accessToken);
      return { isAuthenticated: true, user: loginUser };
    } else {
      removeUser();
      localStorage.setItem("token", null);
      return { isAuthenticated: false, user: null };
    }
  } catch (error) {
    console.log(error?.response?.data?.code);
    if (error?.response?.data?.name === "AUTHERROR") {
      console.error("session expired! please login again.");
    }
    console.error("Authorization Error:", error?.response?.data?.message);
    removeUser();
    localStorage.setItem("token", null);
    return { isAuthenticated: false, user: null };
  }
};

export default authChecker;
