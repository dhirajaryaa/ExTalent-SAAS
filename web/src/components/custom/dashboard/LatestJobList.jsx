import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

function LatestJobList({jobs}) {

  return (
    <Table>
      <TableCaption>A list of your recent job scan.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[20%]">Job Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Match score</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs?.map((job) => (
          <TableRow className="hover:bg-muted/50" key={job._id}>
            <TableCell>{job.title}</TableCell>
            <TableCell>{job.companyName}</TableCell>
            <TableCell>{job.score?.overallScore}</TableCell>
            <TableCell>
              <Button size="sm" asChild>
                <Link to={`/job-match/${job._id}`} state={"Job Match Details"}>
                  <ExternalLink className="mr-1" />
                  View
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LatestJobList;
