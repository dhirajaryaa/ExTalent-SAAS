import { Item, ItemContent, ItemDescription, ItemMedia} from "@/components/ui/item";
import { Lightbulb } from "lucide-react";

function Recommendation({ recommendations }) {
  return (
    <div className="space-y-3 mt-4">
      <h3 className="text-base font-semibold">Recommendations</h3>
      <div className="space-y-2 w-full">
        {recommendations?.map((recommendation, index) => (
          <Item
            variant="outline"
            size="sm"
            className={"shadow-xs bg-background py-1 px-2 sm:py-2 sm:px-3"}
            key={index}
          >
            <ItemMedia>
              <Lightbulb className="size-4 text-primary" />
            </ItemMedia>
            <ItemContent>
              <ItemDescription className={'text-xs sm:text-sm'}>{recommendation}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
