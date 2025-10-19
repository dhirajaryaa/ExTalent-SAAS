import { browser } from "#imports";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
    if (["install", "update"].includes(details.reason)) {
      browser.tabs.create({ url: "welcome.html" });
    }
  });
});
