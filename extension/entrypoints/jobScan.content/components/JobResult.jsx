import CircularProgress from "@/components/custom/CircularProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, ExternalLink, BookOpen } from "lucide-react";

function JobResult({ result }) {
  return (
    <div className="space-y-2 bg-muted/30 rounded-xl p-2 mt-4 shadow-lg">
      <div className="flex items-center justify-between gap-3 px-4 py-1 flex-col sm:flex-row">
        {/* score and applicable */}
        <div className="space-y-2">
          <CircularProgress
            value={`${result?.score?.overallScore}%`}
            strokeWidth={3}
            className={" size-20 sm:size-24"}
            textClassName={"text-2xl sm:text-3xl"}
          />
          <Badge
            className={`text-xs font-semibold mx-auto block
             ${result?.readyToApply ? "bg-primary" : "bg-destructive"}`}
          >
            {result?.readyToApply ? "Applicable" : "Not Applicable"}
          </Badge>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-accent-foreground font-base">
            Strong alignment with the MERN stack but gaps in Next.js,
            TypeScript, Python and cloud/DevOps skills limit immediate
            suitability.
          </p>
          <div>
            <h3 className="text-sm text-foreground font-semibold">
              ✅Match skills
            </h3>
            <p className="space-x-2 space-y-2">
              {result?.matchSkills?.map((skill, index) => (
                <Badge
                  className={
                    "text-[11px] text-green-600 font-base bg-emerald-200"
                  }
                  key={index}
                >
                  {skill.skill}
                </Badge>
              ))}
            </p>
          </div>
          <div>
            <h3 className="text-sm text-foreground font-semibold">
              ⚠️Missing skills
            </h3>
            <p className="space-x-2">
              {result?.missingSkills?.map((skill, index) => (
                <Badge
                  className={"text-[11px] text-red-600 font-base bg-red-200"}
                  key={index}
                >
                  {skill.skill}
                </Badge>
              ))}
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
      {/* action btn  */}
      <div className="flex gap-4 justify-between items-center">
        <Button size={"sm"} variant={"secondary"}>
          <BookOpen />
          view recommendation
        </Button>
        <div className="flex gap-4">
          <Button size={"sm"} variant={"outline"}>
            <BookmarkIcon />
            Save Job
          </Button>
          <Button size={"sm"}>
            <ExternalLink />
            View Full Report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobResult;
