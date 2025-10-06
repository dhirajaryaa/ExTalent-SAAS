import { logoutUserAPI } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";

const useAuth = () => {
  const logoutUser = useMutation({
    mutationFn: logoutUserAPI,
  });
  return { logoutUser };
};

export default useAuth;