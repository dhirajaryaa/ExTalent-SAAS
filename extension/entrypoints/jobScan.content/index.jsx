import { browser } from "#imports";
import React from "react";
import ReactDOM from "react-dom/client";
import "../../assets/index.css";
import App from "./App";

let uiRef = null;

export default defineContentScript({
  matches: ["https://www.linkedin.com/jobs/*"],
  cssInjectionMode: "ui",
  runAt: "document_end",
  async main(ctx) {
    // check message and select job information
    await browser.runtime.onMessage.addListener(
      async (message, sender, sendResponse) => {
        if (message.action === "EXT_EXTRACT_JOB_INFO") {
          // select job information
          const jobId = new URLSearchParams(window.location.search).get(
            "currentJobId"
          );
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

          //* check data selected or not
          if (
            jobId === undefined ||
            jobCompany === undefined ||
            jobTitle === undefined ||
            jobDescription === undefined ||
            jobUrl === undefined ||
            companyLogo === undefined
          ) {
            alert("Job Content Not Available! try again 🔃");
          }
          console.log("jobId", jobId);
          console.log("job title", jobTitle);
          console.log("job url", jobUrl);
          console.log("job company", jobCompany);
          console.log("company logo", companyLogo);
          console.log("job description", jobDescription);

          await sendResponse({
            action: "EXT_JOB_SCAN",
            data: {
              jobId,
              jobTitle,
              jobUrl,
              jobCompany,
              companyLogo,
              jobDescription,
            },
          });
        }
      }
    );

    // Inject UI on job page
    uiRef = await mountShadowUI(ctx);
    uiRef.mount();
  },
});

async function mountShadowUI(ctx){
  return await createShadowRootUi(ctx, {
    name: "extalent-ui",
    position: "inline",
    anchor: ".job-details-jobs-unified-top-card__container--two-pane",
    append: "after",
    onMount: (uiContainer, shadow, shadowContainer) => {
      const app = document.createElement("div");
      uiContainer.append(app);
      const root = ReactDOM.createRoot(app);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      return root;
    },
    onRemove: (root) => {
      root?.unmount();
    },
  });
};
