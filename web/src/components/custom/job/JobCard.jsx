import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";

function JobCard({ job }) {

  return (
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>{job?.title}</ItemTitle>
        <ItemDescription>{job.companyName}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant={"outline"} size={"sm"}>
          View Details <ArrowUpRight />
        </Button>
      </ItemActions>
<ItemFooter>
        <Progress value={job?.score?.overallScore} />
</ItemFooter>
    </Item>
  );
}

export default JobCard;
