import { browser } from "#imports";
import { createContextMenu } from "./contextMenu";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
    if (["install", "update"].includes(details.reason)) {
      browser.tabs.create({ url: "welcome.html" });
    }
  });

  createContextMenu();
});
