import { useState } from "react";
import { useNavigate } from "react-router";
import { Upload, UserSkills } from "@/components/custom";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import authStore from "@/store/authStore";
import { ArrowRight, Loader2, ArrowLeft, AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import userStore from "@/store/userStore";

function Onboarding() {
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { skipOnboarding } = authStore.getState();
  const { setProfile } = userStore.getState();
  const {
    userResumeUpload: { mutateAsync: resumeUpload, isPending, error, isError },
    userProfile: { refetch },
    userOnboarding: {
      mutateAsync: userOnboarding,
      isPending: onboardingPending,
    },
  } = useUser(false);

  const handleSkipOnboarding = () => {
    skipOnboarding();
    navigate("/dashboard");
  };
  //! handle Resume  Upload
  const handleResumeUpload = async () => {
    if (!file || file.type !== "application/pdf") return;
    const res = await resumeUpload(file);
    if (res.isSuccess) {
      const profile = await refetch();
      setProfile(profile?.data?.data);
      setStep(2);
    }
    setFile(null);
  };

  //! handle Resume OnBoarding
  const handleUserOnboarding = async () => {
    const res = await userOnboarding();
    if (res.isSuccess) {
      const profile = await refetch();
      setProfile(profile?.data?.data);
      setStep(1);
      navigate("/dashboard");
    }
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
          <Alert variant={"destructive"}>
            <AlertCircleIcon />
            <AlertTitle>{error?.response?.data?.message}</AlertTitle>
          </Alert>
        )}
        {step === 1 ? (
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
                Next <ArrowRight size={18} />
              </>
            )}
          </Button>
        ) : (
          <div className="flex gap-2 items-center w-full">
            <Button variant={"outline"} onClick={() => setStep(1)}>
              <ArrowLeft /> Back
            </Button>
            <Button
              onClick={handleUserOnboarding}
              disabled={onboardingPending}
              className={"flex-1"}
            >
              {onboardingPending ? (
                <>
                  <Loader2 className="animate-spin size-6" /> saving...
                </>
              ) : (
                <>
                  Finish <ArrowRight size={18} />
                </>
              )}
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Onboarding;
