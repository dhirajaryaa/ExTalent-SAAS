import { browser } from "#imports";
import React from "react";
import ReactDOM from "react-dom/client";
import "../../assets/index.css";
import App from "./App";
import { getSyncStorage } from "@/utils/extStorage";
import { extractJobInfo } from "@/utils/extreactJobInfo";

let uiRef = null;

export default defineContentScript({
  matches: ["https://www.linkedin.com/jobs/*"],
  cssInjectionMode: "ui",
  runAt: "document_end",
  async main(ctx) {
    // check message and select job information
    await browser.runtime.onMessage.addListener(
      async (message, sender, sendResponse) => {
        if (message.action === "EXT_EXTRACT_JOB_INFO") {
          const jobInfo = await extractJobInfo(document, window);
          await browser.runtime.sendMessage(
            { action: "SCAN_JOB_WITH_EXTALENT", payload: jobInfo }
          );
        }
      }
    );

    // Inject UI on job page when ingrate is true
    const ingrate = await getSyncStorage("ingrate");
    uiRef = ingrate && (await mountShadowUI(ctx));
    ingrate && uiRef.mount();
  },
});

async function mountShadowUI(ctx) {
  return await createShadowRootUi(ctx, {
    name: "extalent-ui",
    position: "inline",
    anchor: ".job-details-jobs-unified-top-card__container--two-pane",
    append: "after",
    onMount: (uiContainer, shadow, shadowContainer) => {
      const app = document.createElement("div");
      uiContainer.append(app);
      const root = ReactDOM.createRoot(app);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      return root;
    },
    onRemove: (root) => {
      root?.unmount();
    },
  });
}
