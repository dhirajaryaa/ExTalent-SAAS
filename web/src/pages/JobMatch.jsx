import { JobCard, Loading } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { useJob } from "@/hooks/useJob";
import { setJobs, useStore } from "@/store/store";
import { ArrowUpDown } from "lucide-react";
import { ListFilter } from "lucide-react";
import { useEffect } from "react";

function JobMatch() {
  // get jobs 
  const {
    getAllJobs: { data, isLoading },
  } = useJob(
    {
      pageNo: 1,
      limit: 10,
    },
    true
  );
  // get jobs from store  
  const jobs = useStore(state=>state.jobs) 

  // set jobs on store 
  useEffect(()=>{
    if(data){
      setJobs(data?.data)
    }
  },[data]);

  // show loading state
  if (isLoading) return <Loading />;

  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      {/* filter and title   */}
      <div className="w-full flex items-center justify-between px-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold ">
            Latest Job scan
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            This week job scan is the total number of job scan done in the last
            7 days.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant={"outline"}>
            <ListFilter /> Filter
          </Button>
          <Button variant={"secondary"}>
            <ArrowUpDown /> Sort
          </Button>
        </div>
      </div>
      {/* list of jobs */}
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs?.map((job) => (
          <JobCard job={job} key={job?._id} />
        ))}
      </div>
    </section>
  );
}

export default JobMatch;
