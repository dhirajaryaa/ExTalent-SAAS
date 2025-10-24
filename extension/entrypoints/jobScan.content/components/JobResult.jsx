import CircularProgress from "@/components/custom/CircularProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, ExternalLink } from "lucide-react";
import logo from "@/assets/logo_sm.png";

function JobResult({ result }) {
  console.log(result);
  
  return (
    <div className="space-y-2 rounded-xl p-2 mt-4 shadow-lg">
      <div className="flex items-center justify-between gap-5 px-4 py-1 flex-col sm:flex-row">
        {/* Score and applicability */}
        <div className="flex items-center justify-center flex-col gap-2">
          <CircularProgress
            value={`${result?.score?.overallScore}%`}
            strokeWidth={3}
            className="size-20 sm:size-24"
            textClassName="text-2xl sm:text-3xl"
          />
          <Badge
            className={`text-xs font-semibold ${
              result?.readyToApply ? "bg-primary" : "bg-destructive"
            }`}
          >
            {result?.readyToApply ? "Ready to Apply" : "Not Yet Applicable"}
          </Badge>
        </div>

        {/* Skill insights */}
        <div className="flex flex-col gap-3">
          <p className="text-sm text-accent-foreground mt-2">
            {result?.scanSummary}
          </p>

          <div>
            <h3 className="text-xs font-semibold text-foreground">
              ✅ Matching Skills
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {result?.matchSkills?.map((skill, index) => (
                <Badge
                  key={index}
                  className="text-[11px] text-green-700 font-medium bg-emerald-100"
                >
                  {skill.skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground">
              ⚠️ Missing Skills
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {result?.missingSkills?.map((skill, index) => (
                <Badge
                  key={index}
                  className="text-[11px] text-red-700 font-medium bg-red-100"
                >
                  {skill.skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-2" />

      {/* Action buttons */}
      <div className="flex gap-4 justify-between items-center flex-wrap">
        <p className="text-sm text-muted-foreground font-semibold">
          Powered by{" "}
          <span className="text-primary italic underline">
            <img
              alt="Extalent Logo"
              src={logo}
              className="size-4 inline-block mr-1 mb-[3px]"
            />
            Extalent
          </span>
        </p>

        <div className="flex gap-2 sm:gap-4 items-center justify-between sm:justify-center">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1"
          >
            <BookmarkIcon className="size-4" />
            Save Job
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <ExternalLink className="size-4" />
            View Full Report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobResult;
