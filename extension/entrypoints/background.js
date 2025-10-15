import { authChecker } from "@/lib/authChecker";
import { browser } from "wxt/browser";

export default defineBackground(() => {
  // check auth user when browser is ready
  browser.runtime.onStartup.addListener(() => {
  console.log("🅴🆇🆃🅰🅻🅴🅽🆃 😎 Auth ruining from background");
    authChecker();
  });
  // show welcome page on extension install.
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install" || details.reason === "update") {
      browser.tabs.create({ url: "welcome.html" });
    }
  });
});
