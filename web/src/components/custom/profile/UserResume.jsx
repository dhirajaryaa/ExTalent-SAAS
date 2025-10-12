import axios from "axios";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import pdfLogo from "@/assets/pdf.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Upload, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/useUser";
import { setProfile } from "@/store/store";
import { toast } from "sonner";

function UserResume({ resume, name }) {
  const [metaData, setMetaData] = useState(null);
  const {
    userResumeUpload: { mutateAsync: resumeUpload, isPending },
    userProfile: { refetch },
    userResumeEvaluation: {
      mutateAsync: resumeEvaluation,
      isPending: evaluationPending,
    },
  } = useUser(false);

  const handleAnalyzeResume = async () => {
    const res = await resumeEvaluation();
    if (res.isSuccess) {
      const profile = await refetch();
      setProfile(profile?.data?.data);
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== "application/pdf") return;
    if (selectedFile && selectedFile.type === "application/pdf") {
      const res = await resumeUpload(selectedFile);
      if (res.isSuccess) {
        const profile = await refetch();
        setProfile(profile?.data?.data);
        toast.success("Resume Uploaded successfully 🎉", {
          action: {
            label: "Evaluate Resume",
            onClick: async () => {
              toast.promise(handleAnalyzeResume, {
                loading: "Evaluating Resume...",
                success: () => {
                  return `Resume Evaluated successfully 🎉`;
                },
                error: "Something went wrong!",
              });
            },
          },
        });
      }
    }
  };

  // get pdf meta data
  useEffect(() => {
    async function fetchMeta() {
      if (!resume?.url) return;
      try {
        const response = await axios.head(resume.url);
        const meta = {
          lastModified: response.headers["last-modified"],
        };
        setMetaData(meta);
      } catch (err) {
        console.error("Failed to fetch PDF metadata:", err);
      }
    }

    fetchMeta();
  }, [resume?.url]);

  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">
        Resume
      </h2>
      <Item variant="muted">
        <ItemMedia>
          <Avatar className="size-10 rounded-none">
            <AvatarImage src={pdfLogo} />
            <AvatarFallback>PDF</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{name?.split(" ")[0]}_resume.pdf</ItemTitle>
          <ItemDescription>
            Last updated :
            {new Date(metaData?.lastModified).toLocaleDateString()}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <input
            id="resume"
            type="file"
            accept="application/pdf"
            hidden
            onChange={handleFileChange}
          />
          <Button variant={"outline"} asChild>
            <Label htmlFor="resume">
              {isPending ? (
                <>
                  <Loader2 className="size-5 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload />
                  Reupload
                </>
              )}
            </Label>
          </Button>
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={() => {
              window.open(resume?.url, "_blank");
            }}
          >
            <ExternalLink />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export default UserResume;
