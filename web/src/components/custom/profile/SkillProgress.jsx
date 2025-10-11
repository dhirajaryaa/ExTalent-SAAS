import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

function SkillProgress({
  skills,
  editable
}) {
  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">
        Skills
      </h2>
      <div className="w-full max-w-3xl mx-auto rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 ">
        {skills?.map((skill, index) => (
          <div
            className="flex flex-col gap-2 items-center justify-center" key={skill.name}
          >
            <div className="flex gap-2 items-center justify-between w-full">
              {editable ? (
                <Input
                  value={skill.name || "-"}
                  className="my-2 bg-muted/70 border-0 font-normal text-sm sm:text-base"
                />
              ) : (
                <p className="text-sm">{skill.name}</p>
              )}
              <Badge size="sm" variant="secondary">
                {skill.score}%
              </Badge>
            </div>
            {editable ? (
              <Slider
                value={[skill.score || 0]}
                min={0}
                max={100}
                step={1}
                // onValueChange={(val) => onChange(val[0])}
              />
            ) : (
              <Progress value={skill.score} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillProgress;
