import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import resumeIcon from "@/assets/pdf.svg";
import { X } from "lucide-react";

function Upload({ setStep,file,setFile,fileRef }) {
  //   handle file select change
  const handleFileChange = (e) => {
    e.target.files[0] && setFile(e.target.files[0]);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 text-lg font-semibold justify-center">
        <span className="size-7 flex items-center justify-center bg-primary/30 text-primary font-bold rounded-full">
          1
        </span>
        Upload Resume
      </h2>
      <p className="text-sm text-center text-muted-foreground">
        Please upload your resume (PDF file only)
      </p>
      <div className="mt-6 flex w-full max-w-2xl mx-auto">
        {!file ? ( //! file uploader and dnd area
          <div className="flex gap-2 items-center justify-center w-full flex-col min-h-60 border-dashed rounded-xl border-2 border-muted-foreground/50">
            <UploadCloud size={50} className="text-muted-foreground" />
            <p className="text-muted-foreground text-center">
              Upload a file or drag and drop
              <span className="text-xs text-muted-foreground/50 text-center block">
                (PDF only and max 5MB)
              </span>
            </p>
            <Button variant={"outline"} size={"sm"} className={"cursor-pointer"} asChild>
              <label htmlFor="file">select file</label>
            </Button>
            <input
              id="file"
              ref={fileRef}
              accept="application/pdf"
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
        ) : (
          //! uploaded file
          <div className="flex gap-2 items-center  w-full border-2 border-muted-foreground/50 rounded-xl px-6 py-4 relative">
            <img
              src={resumeIcon}
              alt="resume"
              className="w-12 h-auto object-cover"
            />
            <div className="flex w-full relative overflow-hidden">
              <div className="flex gap-1 justify-center w-full flex-1 flex-col overflow-hidden">
                <p className="text-muted-foreground  text-base w-full flex-1 font-semibold truncate">
                 {file?.name}
                </p>
                <p className="text-xs text-foreground/30 block font-normal">
                  {(file?.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                onClick={() => setFile(null)}
              >
                <X />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
