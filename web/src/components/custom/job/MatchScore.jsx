import { Progress } from "@/components/ui/progress"
import { CircularProgress } from ".."

function MatchScore({score}) {
  return (
  <div className="space-y-4">
            <h3 className="text-base font-semibold"> Match Score Breakdown</h3>
            <div className="flex items-center w-full gap-6">
              <CircularProgress
                value={`${score.overallScore}%`}
                className={"size-20 sm:size-25 "}
                strokeWidth={3}
                textClassName={"text-2xl"}
              />
              {/* other score   */}
              <div className="flex-1">
                {Object.entries(score).map(([name, value]) => (
                  <div key={name} className="space-y-1 mb-2">
                    <div className="text-xs capitalize flex justify-between items-center">
                      <p> {name.replace("Score", " Score")}</p>
                      <strong className="text-primary text-xs">{value}%</strong>
                    </div>
                    <Progress value={value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default MatchScore