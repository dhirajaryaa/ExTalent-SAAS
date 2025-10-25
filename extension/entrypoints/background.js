import { browser } from "#imports";
import { fetchAuthUser } from "@/api/auth.api";
import { scanNewJob } from "@/api/job.api";
import { setSyncStorage } from "@/utils/extStorage";

// fetch User info
async function getUser() {
  try {
    const user = await fetchAuthUser();    
    return user;
  } catch (error) {
    return error;
  }
}
//job scan
async function jobScan() {
  try {
    const job = await scanNewJob();
    return job;
  } catch (error) {
    return error;
  }
}

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

  //! handle scan api call
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.action === "GET_USER_INFO") {
    getUser().then(user => sendResponse(user));
    return true;
  }

  if (message.action === "SCAN_JOB_WITH_EXTALENT") {
    jobScan().then(job => sendResponse(job));
    return true;
  }

});

});
