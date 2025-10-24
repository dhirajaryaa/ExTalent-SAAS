import "@/assets/index.css";
import JobScanBtn from "./components/JobScanBtn";
import JobResult from "./components/JobResult";
import { browser } from "#imports";
import { extractJobInfo } from "@/utils/extreactJobInfo";
import { useState } from "react";
import Status from "./components/Status";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleScanJob() {
    setLoading(true);
    const jobInfo = await extractJobInfo(document, window);
    const res = await browser.runtime.sendMessage({
      action: "SCAN_JOB_WITH_EXTALENT",
      payload: jobInfo,
    });
    if (res.isSuccess) {
      setResult(res.data);
      setLoading(false);
    } else {
      setError(res.message);
      setLoading(false);
    }
  }

  return (
    <div className="my-3 font-sans">
      <JobScanBtn action={handleScanJob} />
      {loading && <Status loading={loading} />}
      {error && <Status error={error} />}
      {result && <JobResult result={result} />}
    </div>
  );
}

export default App;
