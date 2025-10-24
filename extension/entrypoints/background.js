import { browser } from "#imports";
import { scanNewJob } from "@/api/job.api";
import { setSyncStorage } from "@/utils/extStorage";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
    // set linkedin integration on
    setSyncStorage("ingrate", true);
    if (details.reason === "install" || details.reason === "update") {
      browser.tabs.create({ url: "welcome.html" });
    }

    // context menu add on install
    browser.contextMenus.create({
      id: "extalent",
      title: "Scan Job with Extalent",
      contexts: ["page", "link", "selection"],
      documentUrlPatterns: [
        "https://www.linkedin.com/jobs/collections/*",
        "https://www.linkedin.com/jobs/search/*",
      ],
    });
  });

  //! handle context menu click
  browser.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "extalent") {
      await browser.tabs.sendMessage(tab.id, {
        action: "EXT_EXTRACT_JOB_INFO",
      });
    }
  });

  //! handle job scan api call
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
      if (message.action === "SCAN_JOB_WITH_EXTALENT") {}
          const res = await scanNewJob(message.payload);
          sendResponse(res);          
    })();
    return true;
  });
});
