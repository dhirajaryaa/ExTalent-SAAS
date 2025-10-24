// import { browser, storage } from "#imports";
import { fetchAuthUser } from "@/api/auth.api";
import { setLocalStorage } from "@/utils/extStorage";

export default defineContentScript({
  matches: [`${import.meta.env.VITE_TOKEN_SYNC_DASHBOARD_URL}`],
  runAt: "document_end",
  async main() {
    // check token
    const token = localStorage.getItem("token");
    if (token) {
      // set token on storage
      await setLocalStorage("token", {
        accessToken: token,
        refreshToken: null,
        syncedAt: new Date().toISOString(),
      });
      // get user info
      const user = await fetchAuthUser();
      // set user info on storage
      await setLocalStorage("user", user?.data?.user);
    }
    // Listen for postMessage from dashboard
    window.addEventListener("message", async (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.type === "EXT_AUTH") {
        console.log("Auth token received");

        // set token on storage
        await setLocalStorage("token", {
          accessToken: event.data.accessToken,
          refreshToken: event.data.refreshToken,
          syncedAt: new Date().toISOString(),
        });

        // get user info
        const user = await fetchAuthUser();

        // set user info on storage
        await setLocalStorage("user", user?.data?.user);

        setTimeout(() => window.close(), 4000);
      }
    });

    // Also send a message to dashboard saying content script is ready
    window.postMessage({ type: "EXTENSION_READY" }, "*");
  },
});
