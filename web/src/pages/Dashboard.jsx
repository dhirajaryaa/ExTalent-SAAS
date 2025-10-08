import { LatestJobList, ReportCard } from "@/components/custom";
import React from "react";

function Dashboard() {
  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      <div className="w-full grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 gap-4">
        <ReportCard
          title={"Total Job Scan"}
          description={"total no of job scan"}
          value={25}
          action={"try"}
        />
        <ReportCard
          title={"Saved Jobs"}
          description={"total no of saved job"}
          value={12}
          action={"d"}
        />
        <ReportCard
          title={"This week Job scan"}
          description={"last 7 days total job scan"}
          value={8}
          action={"d"}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold ">Latest Job scan</h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          This week job scan is the total number of job scan done in the last 7
          days.
        </p>
        <LatestJobList />
      </div>
    </section>
  );
}

export default Dashboard;
