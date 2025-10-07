import {
  BadgeCheckIcon,
  ChevronRightIcon,
  ScanSearch,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import useUser from "@/hooks/useUser";
import userStore from "@/store/userStore";
import ListSkills from "./ListSkills";

function UserSkills() {
  const {
    userResumeEvaluation: { mutateAsync, isPending },
  } = useUser();
  const { setResumeEvaluation } = userStore.getState();

  const handleAnalyzeResume = async () => {
    const res = await mutateAsync();
    if (res?.isSuccess) {
      setResumeEvaluation(res?.data);
    }
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-semibold justify-center">
          <span className="size-7 flex items-center justify-center bg-primary/30 text-primary font-bold rounded-full">
            2
          </span>
          Add Your Skills
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground text-center w-3/4 mx-auto">
          Add skills that you have or want to acquire. This will help us tailor
          job recommendations to your skills and interests.
        </p>
      </div>
      {/* ai skills analysis  */}
      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Analyze Resume using AI</ItemTitle>
          <ItemDescription>
            Automatically extract relevant skills from your resume using AI.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" onClick={handleAnalyzeResume} disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-6 animate-spin" />
            ) : (
              <ScanSearch />
            )}
            Analyze
          </Button>
        </ItemActions>
      </Item>
      {/* list of skills  */}
      <ListSkills />
    </div>
  );
}

export default UserSkills;
