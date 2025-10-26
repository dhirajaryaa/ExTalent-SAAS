import { LatestJobList, ReportCard } from "@/components/custom";
import { useJob } from "@/hooks/useJob";
import { Loader2 } from "lucide-react";
import React from "react";

function Dashboard() {
  const {
    getAllJobs: { data, isLoading },
  } = useJob(true, { query: { pageNo: 1, limit: 10 } });

  if (isLoading)
    return (
      <div className="w-full my-20 flex items-center justify-center">
        <Loader2 className="animate-spin size-8" />
      </div>
    );

  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      <div className="w-full grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 gap-4">
        <ReportCard
          title={"Total Jobs Scanned"}
          description={"Total number of jobs scanned using our extension"}
          value={data?.data?.totalJobs}
        />
        <ReportCard
          title={"Jobs Saved for Later"}
          description={"Total number of jobs saved for later analysis"}
          value={data?.data?.totalSavedJobs}
        />
        <ReportCard
          title={"This week Job scan"}
          description={"last 7 days total job scan"}
          value={8}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold ">Latest Job scan</h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          This week job scan is the total number of job scan done in the last 7
          days.
        </p>
        <LatestJobList jobs={data?.data?.jobs} />
      </div>
    </section>
  );
}

export default Dashboard;
