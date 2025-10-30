import {
  Loading,
  MatchScore,
  Recommendation,
  SkillAnalysis,
} from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useJob } from "@/hooks/useJob";
import { Trash2 } from "lucide-react";
import { Bookmark, ExternalLink } from "lucide-react";
import { useParams } from "react-router";
import { setJobs } from "@/store/store";
import { useNavigate } from "react-router";

function JobDetails() {
  const { jobId } = useParams();
  const {
    getJobWithId: { isLoading, data },
    deleteJobWithId : {isPending,mutateAsync},
    getAllJobs: {data: jobs,refetch}
  } = useJob(true, { jobId });
  const navigate = useNavigate();

  const handleJobReportDelete = async()=>{
    await mutateAsync();
    const res = await refetch();
    if(res){
      setJobs(res?.data?.data);
      navigate("/job-match",{state: "Job Match"});
    }
  }

  if (isLoading) return <Loading />;

  const job = data?.data;

  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      {/* job details  */}
      <Card className={"w-full max-w-4xl border-0 shadow-none mx-auto"}>
        <CardHeader
          className={
            "grid-cols-1 px-2 grid-rows-[auto_auto] sm:grid-cols-[auto_1fr]"
          }
        >
          <img
            src={job?.logo}
            alt={job?.title}
            className="size-14 sm:size-20 rounded-lg col-start-1 row-start-1"
          />
          <div>
            <CardTitle className={"text-lg sm:text-xl"}>
              {job?.title}{" "}
            </CardTitle>
            <CardDescription className={"flex items-center gap-2"}>
              {job?.companyName}
            </CardDescription>
            <div className="flex gap-2 items-center mt-2">
              <Button asChild size="sm">
                <a href={job?.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  View Posting
                </a>
              </Button>
              <Button size="sm" variant={"outline"}>
                <Bookmark />
                Save Job
              </Button>
              <Badge
                size="sm"
                className={"ml-auto"}
                variant={job?.readyToApply ? "default" : "destructive"}
              >
                {job?.readyToApply ? "Applicable" : "Not Applicable"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          {/* matchSkills  */}
          <MatchScore score={job?.score} />
          {/* skills analyzed  */}
          <SkillAnalysis
            missingSkills={job?.missingSkills}
            matchSkills={job?.matchSkills}
          />
          {/* job summary  */}
          <div className="space-y-2 mt-4">
            <h3 className="text-base font-semibold">Job Summary</h3>
            <p className="text-muted-foreground text-[15px]">
              {job?.scanSummary}
            </p>
          </div>
          <Recommendation recommendations={job.recommendations} />
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"}>
                <Trash2 /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this job scan report form server.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant={"destructive"} onClick={handleJobReportDelete}>
                    {isPending ? "Deleting..." : "Delete"}
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </section>
  );
}

export default JobDetails;
