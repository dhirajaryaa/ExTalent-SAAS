import "@/assets/index.css";
import JobScanBtn from "./components/JobScanBtn";
import JobResult from "./components/JobResult";
import { browser } from "#imports";
import { extractJobInfo } from "@/utils/extreactJobInfo";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Loading from "./components/Loading";

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
    console.log(res);
    
    if (res.isSuccess) {      
      setResult(res.data);
      setLoading(false);
    } else {
      setError(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="my-3 font-sans">
      <JobScanBtn action={handleScanJob} />
      {loading && <Loading />}
      {result && <JobResult result={result} />}
      {error && <p className="text-destructive">{error}</p>}
    </div>
  );
}

export default App;
