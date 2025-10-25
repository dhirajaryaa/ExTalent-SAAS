import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { ScanIcon } from "lucide-react";
import { useForm } from "react-hook-form";

function JobScan() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleJobScan = async () => {};

  return (
    <section className="h-full w-full p-3  max-w-3xl mx-auto">
      <div className="w-full space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold ">Scan New Job</h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Write the job description of the new job you want to scan for job
          match analysis.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleJobScan)} className="w-full">
        <div className="grid  grid-cols-1 sm:grid-cols-2 mt-8 w-full gap-4">
          <div className="space-y-2 col-span-2">
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea
              {...register("jobDescription")}
              className="w-full h-32"
              id="jobDescription"
              placeholder="Enter job description here"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Enter company name here"
              {...register("companyName")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Company Logo URL</Label>
            <Input
              id="logo"
              placeholder="Enter company logo url here"
              {...register("logo")}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="url">Job Post URL</Label>
            <Input
              id="url"
              placeholder="Enter job post url here"
              {...register("url")}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Button type="submit" className={"w-full"}>
              {true ? (
                <>
                  <Loader2 className="animate-spin size-6" /> Scanning...
                </>
              ) : (
                <>
                  <ScanIcon />
                  Scan Job
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobScan;
