import { authChecker } from "@/lib/authChecker";
import { browser } from "#imports";

export default defineBackground(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 🚀 Background started");
  browser.runtime.onStartup.addListener(async () => {
    await authChecker();
  });
  // show welcome page on extension install
  browser.runtime.onInstalled.addListener((details) => {
    if (["install", "update"].includes(details.reason)) {
      browser.tabs.create({ url: "welcome.html" });
    }
  });
});
