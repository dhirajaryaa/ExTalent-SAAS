import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

function JobCard({ job }) {
  return (
    <Item variant="muted">
      <ItemMedia variant="image">
        <img
          src={job.logo}
          alt={job.title}
          className="object-cover"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{job?.title}</ItemTitle>
        <ItemDescription>{job.companyName}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant={"outline"} size={"sm"} asChild>
          <Link to={`/job-match/${job?._id}`} state="View Job Match">
          View <ArrowUpRight />
          </Link>
        </Button>
      </ItemActions>
      <ItemFooter className={'flex flex-col gap-2'}>
        <ItemDescription className={'text-xs sm:text-sm flex items-center justify-between w-full'}>
          <p>Match Score</p>
          <strong className="text-primary">{job?.score?.overallScore}%</strong>
        </ItemDescription>
        <Progress value={job?.score?.overallScore} />
      </ItemFooter>
    </Item>
  );
}

export default JobCard;
