import { CircularProgress, Loading, MatchScore } from "@/components/custom";
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
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useJob } from "@/hooks/useJob";
import { useStore } from "@/store/store";
import { BadgeCheckIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useParams } from "react-router";

function JobDetails() {
  const { jobId } = useParams();

  const job = {
    jobId: "4258062434",
    title: "Full Stack Developer (MERN + Next.js + Python)",
    companyName: "Cloudely, Inc",
    savedJob: false,
    score: {
      overallScore: 60,
      relevanceScore: 65,
      skillsScore: 55,
    },
    scanSummary:
      "Strong alignment with the MERN stack but gaps in Next.js, TypeScript, Python and cloud/DevOps skills limit immediate suitability.",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQG6KMZp1zAiTA/company-logo_100_100/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1762992000&v=beta&t=0_CrmO6zor2g8YSL-ASr4SclZdZHtk9ROROi_X8p_Lg",
    readyToApply: false,
    matchSkills: [
      {
        skill: "React",
        score: 90,
      },
      {
        skill: "Node.js",
        score: 85,
      },
      {
        skill: "Express.js",
        score: 80,
      },
      {
        skill: "MongoDB",
        score: 85,
      },
      {
        skill: "JavaScript",
        score: 70,
      },
    ],
    missingSkills: [
      {
        skill: "Next.js",
        score: 80,
      },
      {
        skill: "TypeScript",
        score: 75,
      },
      {
        skill: "Python",
        score: 70,
      },
      {
        skill: "CI/CD pipelines",
        score: 65,
      },
      {
        skill: "Docker",
        score: 60,
      },
      {
        skill: "AWS/GCP cloud platforms",
        score: 60,
      },
    ],
    recommendations: [
      "Acquire proficiency in Next.js and server‑side rendering techniques.",
      "Learn TypeScript to meet modern JavaScript standards.",
      "Develop Python skills for backend scripting and micro‑services.",
      "Gain experience with CI/CD pipelines, Docker, and cloud platforms (AWS or GCP).",
      "Seek additional professional experience beyond internships to meet the 3+ year requirement.",
    ],
    url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
  };

  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      {/* job details  */}
      <Card className={"w-full max-w-3xl mx-auto bg-muted/50"}>
        <CardHeader >
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>{job.companyName}</CardDescription>
          <CardAction className={'col-span-3 w-full justify-center'}>
            <Button size="sm" asChild>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                View Posting
                <ExternalLink />
              </a>
            </Button>
          </CardAction>
        </CardHeader>
        <Separator />
        <CardContent>
          <MatchScore score={job?.score} />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default JobDetails;
