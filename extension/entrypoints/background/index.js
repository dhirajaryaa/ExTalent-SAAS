import { browser } from "#imports";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
    if (["install", "update"].includes(details.reason)) {
      browser.tabs.create({ url: "welcome.html" });
    }
  });

  // context menu add on install
  browser.contextMenus.create({
    id: "extalent",
    title: "Scan Job with Extalent",
    contexts: ["page", "link", "selection"],
    documentUrlPatterns: ["https://www.linkedin.com/jobs/collections/*"],
  });

  //! handle context menu click
  browser.contextMenus.onClicked.addListener(async (info, tab) => {
    console.log("Job scan process started");
    if (info.menuItemId === "extalent") {
      browser.tabs.sendMessage(tab.id, { type: "SCAN_JOB_WITH_EXTALENT" });
    }
  });
});
