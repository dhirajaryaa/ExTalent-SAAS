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
import { ExternalLink, Upload } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

function UserResume({ resume }) {
  const [metaData, setMetaData] = useState(null);

  async function getPdfMetaData(url) {
    const response = await axios.head(url);
    return {
      contentType: response.headers.get("Content-Type"),
      contentLength: response.headers.get("Content-Length"),
      lastModified: response.headers.get("Last-Modified"),
    };
  }

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
    <div className="w-full mx-auto max-w-3xl">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">Resume</h2>
      <Item variant="muted">
        <ItemMedia>
          <Avatar className="size-10 rounded-none">
            <AvatarImage src={pdfLogo} />
            <AvatarFallback>PDF</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Resume.pdf</ItemTitle>
          <ItemDescription>
            Last updated :{new Date(metaData?.lastModified).toLocaleDateString()}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm">
            <Upload />
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
