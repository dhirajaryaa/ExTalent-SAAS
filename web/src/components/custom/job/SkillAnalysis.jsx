import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { InfoIcon, BadgeCheckIcon } from "lucide-react";

function SkillAnalysis({ missingSkills, matchSkills }) {
  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-base font-semibold"> Skill Analysis</h3>
      <div className="gap-2 w-full grid grid-cols-1 sm:grid-cols-2">
        {/* match skills  */}
        <div className="space-y-2">
          {matchSkills?.map((skill, index) => (
            <Item
              variant="muted"
              size="sm"
              className={"bg-green-300/20 shadow-xs py-1 px-2 sm:py-2 sm:px-3"}
              key={index}
            >
              <ItemMedia>
                <BadgeCheckIcon className="size-4 text-green-500" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{skill?.skill}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <span className="text-emerald-400 capitalize text-xs">
                  matched
                </span>
              </ItemActions>
            </Item>
          ))}
        </div>
        {/* missing skills  */}
        <div className="space-y-2">
          {missingSkills?.map((skill, index) => (
            <Item
              variant="muted"
              size="sm"
              className={"bg-rose-400/20 shadow-xs py-1 px-2 sm:py-2 sm:px-3"}
              key={index}
            >
              <ItemMedia>
                <InfoIcon className="size-4 text-red-600" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{skill?.skill}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <span className="text-rose-400 capitalize text-xs">
                  missing
                </span>
              </ItemActions>
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillAnalysis;
