import { browser, storage } from "#imports";
export default defineContentScript({
  matches: [`${import.meta.env.VITE_TOKEN_SYNC_DASHBOARD_URL}`],
  run_at: "document_idle",
  async main() {
    // Listen for postMessage from dashboard
    window.addEventListener("message", async (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.type === "EXT_AUTH") {
        console.log("Auth token received");
        // console.log(event.data);
        const getToken = await storage.getItem("sync:token");
        console.log("getToken✅: ", getToken);

        // set token on storage
        await storage.setItem(
          "local:accessToken",
          JSON.stringify(event.data.accessToken)
        );
        await storage.setItem(
          "local:refreshToken",
          JSON.stringify(event.data.refreshToken)
        );

        setTimeout(() => window.close(), 4000);
      }
    });

    // Also send a message to dashboard saying content script is ready
    window.postMessage({ type: "EXTENSION_READY" }, "*");
  },
});
