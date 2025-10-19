import { storage } from "#imports";
import { fetchAuthUser } from "@/api/auth.api";

export const authChecker = async () => {
  const token = await storage.getItem("sync:token");
  //   get user info
  if (!token) {
    const res = await fetchAuthUser();
    if (res) {
      await storage.setItem("local:user", JSON.stringify(res?.data?.user));
      await storage.setItem(
        "local:accessToken",
        JSON.stringify(res?.data?.accessToken)
      );
    } else {
      await storage.setItem("local:user", JSON.stringify(res?.data?.user));
      await storage.setItem(
        "local:accessToken",
        JSON.stringify(res?.data?.accessToken)
      );
    }
  }
};
