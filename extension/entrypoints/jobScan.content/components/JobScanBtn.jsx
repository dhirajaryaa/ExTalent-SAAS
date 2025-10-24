import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Search, Loader2 } from "lucide-react";
import { browser } from "#imports";
import { extractJobInfo } from "@/utils/extreactJobInfo";

function JobScanBtn({
  action,
  loading = false,
  title = "Analyze Job Match",
  description = "Click below to scan the job description and instantly view your compatibility score, skill gaps, and improvement tips.",
}) {
  async function handleScanJob() {
    const jobInfo = await extractJobInfo(document, window);
    await browser.runtime.sendMessage({
      action: "SCAN_JOB_WITH_EXTALENT",
      payload: jobInfo,
    });
  }

  return (
    <Item className={"border-2 border-primary rounded-xl"}>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription className={"text-xs"}>{description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          size="sm"
          onClick={handleScanJob}
          disabled={Boolean(loading)}
          aria-label={loading ? "Analyzing job match" : "Analyze job match"}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin size-6 mr-1" /> Analyzing
            </>
          ) : (
            <>
              <Search className="size-5 mr-1" /> Analyze
            </>
          )}
        </Button>
      </ItemActions>
    </Item>
  );
}

export default JobScanBtn;
