import { browser } from "#imports";

export default defineContentScript({
  matches: ["https://www.linkedin.com/jobs/*"],
  async main(ctx) {
    await browser.runtime.onMessage.addListener(
      async (message, sender, sendResponse) => {
        if (message.action === "SCAN_JOB_WITH_EXTALENT") {
          // select job information 
          const jobDescription = document
            .querySelector("div#job-details p")
            ?.innerText.replace(/\n/g, "")
            .trim();
        }
      }
    );
  },
});
