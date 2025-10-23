import { browser } from "#imports";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
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
      "https://www.linkedin.com/jobs/search/*"
    ],
  });
  });

  //! handle context menu click
  browser.contextMenus.onClicked.addListener(async(info, tab) => {
    if (info.menuItemId === "extalent") {
      await browser.tabs.sendMessage(
        tab.id,
        { action: "EXT_EXTRACT_JOB_INFO" },
      async  function (response) {
          console.info("scan res:", response);
        }
      );
    }
  });
  
});
