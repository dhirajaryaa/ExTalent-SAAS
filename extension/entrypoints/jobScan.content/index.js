import { browser } from "#imports";

export default defineContentScript({
  matches: ["https://www.linkedin.com/jobs/*"],
  async main(ctx) {
    await browser.runtime.onMessage.addListener(
      async (message, sender, sendResponse) => {
        if (message.action === "SCAN_JOB_WITH_EXTALENT") {
          // select job information
          const jobId = new URLSearchParams(window.location.search).get("currentJobId");
          const jobInfo = document.querySelector(
            "div.job-details-jobs-unified-top-card__job-title h1"
          );
          const jobTitle = jobInfo?.innerText;
          const jobUrl = jobInfo?.querySelector("a")?.href;
          const jobCompany = document
            .querySelector(
              "div.jobs-company__box a[data-view-name='job-details-about-company-name-link']"
            )
            ?.innerText.trim();
          const companyLogo = document.querySelector(
            "div.jobs-company__box img[alt*='company logo']"
          )?.src;

          const jobDescription = document
            .querySelector("div#job-details p")
            ?.innerText.replace(/\n/g, "")
            .trim();

          console.log("jobId", jobId);
          console.log("job title", jobTitle);
          console.log("job url", jobUrl);
          console.log("job company", jobCompany);
          console.log("company logo", companyLogo);
          console.log("job description", jobDescription);
        }
      }
    );
  },
});
