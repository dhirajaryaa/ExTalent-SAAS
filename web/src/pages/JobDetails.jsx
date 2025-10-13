import {
  Loading,
  MatchScore,
  Recommendation,
  SkillAnalysis,
} from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Bookmark, ExternalLink } from "lucide-react";
import { useParams } from "react-router";

function JobDetails() {
  const { jobId } = useParams();
  const {
    getJobWithId: { isLoading, data },
  } = useJob(true, { jobId });

  if (isLoading) return <Loading />;

  const job = data?.data;
  //   jobId: "4258062434",
  //   title: "Full Stack Developer (MERN + Next.js + Python)",
  //   companyName: "Cloudely, Inc",
  //   savedJob: false,
  //   score: {
  //     overallScore: 60,
  //     relevanceScore: 65,
  //     skillsScore: 55,
  //   },
  //   scanSummary:
  //     "Strong alignment with the MERN stack but gaps in Next.js, TypeScript, Python and cloud/DevOps skills limit immediate suitability.",
  //   logo: "https://media.licdn.com/dms/image/v2/C560BAQG6KMZp1zAiTA/company-logo_100_100/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1762992000&v=beta&t=0_CrmO6zor2g8YSL-ASr4SclZdZHtk9ROROi_X8p_Lg",
  //   readyToApply: false,
  //   matchSkills: [
  //     {
  //       skill: "React",
  //       score: 90,
  //     },
  //     {
  //       skill: "Node.js",
  //       score: 85,
  //     },
  //     {
  //       skill: "Express.js",
  //       score: 80,
  //     },
  //     {
  //       skill: "MongoDB",
  //       score: 85,
  //     },
  //     {
  //       skill: "JavaScript",
  //       score: 70,
  //     },
  //   ],
  //   missingSkills: [
  //     {
  //       skill: "Next.js",
  //       score: 80,
  //     },
  //     {
  //       skill: "TypeScript",
  //       score: 75,
  //     },
  //     {
  //       skill: "Python",
  //       score: 70,
  //     },
  //     {
  //       skill: "CI/CD pipelines",
  //       score: 65,
  //     },
  //     {
  //       skill: "Docker",
  //       score: 60,
  //     },
  //     {
  //       skill: "AWS/GCP cloud platforms",
  //       score: 60,
  //     },
  //   ],
  //   recommendations: [
  //     "Acquire proficiency in Next.js and server‑side rendering techniques.",
  //     "Learn TypeScript to meet modern JavaScript standards.",
  //     "Develop Python skills for backend scripting and micro‑services.",
  //     "Gain experience with CI/CD pipelines, Docker, and cloud platforms (AWS or GCP).",
  //     "Seek additional professional experience beyond internships to meet the 3+ year requirement.",
  //   ],
  //   url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
  // };

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
            <CardTitle className={"text-lg sm:text-xl"}>{job?.title} </CardTitle>
            <CardDescription className={"flex items-center gap-2"}>
              {job?.companyName}
            </CardDescription>
            <div className="flex gap-2 items-center">
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
              className={'ml-auto'}
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
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Job Summary</h3>
            <p className="text-muted-foreground text-[15px]">
              {job?.scanSummary}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Recommendation recommendations={job.recommendations} />
        </CardFooter>
      </Card>
    </section>
  );
}

export default JobDetails;
