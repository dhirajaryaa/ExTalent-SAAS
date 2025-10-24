export const extractJobInfo = async (document, window) => {
  // select job information
  const jobId = new URLSearchParams(window.location.search).get("currentJobId");
  const jobInfo = document.querySelector(
    "div.job-details-jobs-unified-top-card__job-title h1"
  );
  const jobTitle = jobInfo?.innerText;
  const url = jobInfo?.querySelector("a")?.href;
  const companyName = document
    .querySelector(
      "div.jobs-company__box a[data-view-name='job-details-about-company-name-link']"
    )
    ?.innerText.trim();
  const logo = document.querySelector(
    "div.jobs-company__box img[alt*='company logo']"
  )?.src;

  const jobDescription = document
    .querySelector("div#job-details p")
    ?.innerText.replace(/\n/g, "")
    .trim();

  //* check data selected or not
  if (
    jobId === undefined ||
    companyName === undefined ||
    jobTitle === undefined ||
    jobDescription === undefined ||
    url === undefined ||
    logo === undefined
  ) {
    alert("Job Content Not Available! try again 🔃");
  }
  return {
    jobId,
    url,
    companyName,
    logo,
    jobDescription,
  };
};
