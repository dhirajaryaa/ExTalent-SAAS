import { browser } from "wxt/browser";
export default defineBackground(() => {
  // show welcome page on extension install.
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
      console.log(`🅴🆇🆃🅰🅻🅴🅽🆃`);
      browser.tabs.create({ url: "welcome.html" });
    }
  });
});
