import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { jobScanSchema } from "@/schema/job.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ScanIcon } from "lucide-react";
import { useForm } from "react-hook-form";

function JobScan() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(jobScanSchema),
  });

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
              aria-invalid={errors.jobDescription ? "true" : "false"}
            />
            {errors.jobDescription && (
              <p className="text-destructive text-xs mt-1">
                {errors.jobDescription.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Enter company name here"
              {...register("companyName")}
              aria-invalid={errors.companyName ? "true" : "false"}
            />
            {errors.companyName && (
              <p className="text-destructive text-xs mt-1">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Company Logo URL</Label>
            <Input
              id="logo"
              placeholder="Enter company logo url here"
              {...register("logo")}
              aria-invalid={errors.logo ? "true" : "false"}
            />
            {errors.logo && (
              <p className="text-destructive text-xs mt-1">
                {errors.logo.message}
              </p>
            )}
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="url">Job Post URL</Label>
            <Input
              id="url"
              placeholder="Enter job post url here"
              {...register("url")}
              aria-invalid={errors.url ? "true" : "false"}
            />
            {errors.url && (
              <p className="text-destructive text-xs mt-1">
                {errors.url.message}
              </p>
            )}
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
