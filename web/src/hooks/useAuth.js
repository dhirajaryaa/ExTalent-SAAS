import { loginUserAPI, logoutUserAPI } from "@/api/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAuth = (enabled=false) => {
  const logoutUser = useMutation({
    mutationFn: logoutUserAPI,
  });
  const loginUser = useQuery({
    queryKey: ["loginUser"],
    queryFn: loginUserAPI,
    enabled
  });
  return { logoutUser, loginUser };
};

export default useAuth;
