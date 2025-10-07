import { useState } from "react";
import { useNavigate } from "react-router";
import { Upload, UserSkills } from "@/components/custom";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import authStore from "@/store/authStore";
import { ArrowRight, Loader2, ArrowLeft ,AlertCircleIcon} from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

function Onboarding() {
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { skipOnboarding, setUser } = authStore.getState();
  const {
    userResumeUpload: { mutateAsync: resumeUpload, isPending, error, isError },
    userProfile: { refetch },
  } = useUser(false);

  const handleSkipOnboarding = () => {
    skipOnboarding();
    navigate("/dashboard");
  };
  // handle Resume  Upload
  const handleResumeUpload = async () => {
    const res = await resumeUpload(file);
    if (res.isSuccess) {
      const profile = await refetch();
      setUser(profile?.data);
      setStep(2);
    };
    setFile(null);
  };

  return (
    <main className="w-full min-svh h-screen p-4 flex flex-col items-center justify-center relative">
      <nav className="flex items-center justify-between gap-2 w-full mb-10 fixed top-2 left-0 right-0 px-4">
        <Button size="sm" variant={"outline"} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </Button>
        {/* <Button variant={"ghost"} onClick={handleSkipOnboarding}>
          Skip
        </Button> */}
      </nav>
      <h1 className="text-xl text-primary font-bold sm:text-4xl text-center">
        Welcome, to ExTalent
      </h1>
      <p className="text-base text-muted-foreground text-center">
        Please complete your profile to get started
      </p>
      {/* stepper later on */}
      {/* <div className="flex w-full"></div> */}
      <section className="border-2 border-primary w-full max-w-2xl mx-auto p-6 mt-6 rounded-xl flex flex-col gap-4">
        {step === 1 ? (
          <Upload setStep={setStep} file={file} setFile={setFile} />
        ) : (
          <UserSkills />
        )}
        {/* error show  */}
        {isError && file && (
          <Alert variant={'destructive'}>
            <AlertCircleIcon  />
            <AlertTitle>{error?.response?.data?.message}</AlertTitle>
          </Alert>
        )}
        <Button
          onClick={handleResumeUpload}
          disabled={!file || isPending}
          className={"w-full"}
        >
          {isPending ? (
            <>
              <Loader2 className="animate-spin size-6" /> Uploading...
            </>
          ) : (
            <>
              {step === 1 ? "Next" : "Finish"}
              <ArrowRight size={18} />
            </>
          )}
        </Button>
      </section>
    </main>
  );
}

export default Onboarding;
