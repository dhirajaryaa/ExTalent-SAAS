// import { browser, storage } from "#imports";
import { setLocalStorage } from "@/utils/extStorage";

export default defineContentScript({
  matches: [`${import.meta.env.VITE_TOKEN_SYNC_DASHBOARD_URL}`],
  run_at: "document_idle",
  async main() {
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

        setTimeout(() => window.close(), 4000);
      }
    });

    // Also send a message to dashboard saying content script is ready
    window.postMessage({ type: "EXTENSION_READY" }, "*");
  },
});
