import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Upload, UserSkills } from "@/components/custom";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { ArrowRight, Loader2, ArrowLeft, AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { setProfile, setUser, useStore } from "@/store/store";
import useAuth from "@/hooks/useAuth";

function Onboarding() {
  const user = useStore(state => state.user);
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const {
    userResumeUpload: { mutateAsync: resumeUpload, isPending, error, isError },
    userProfile: { refetch },
    userOnboarding: {
      mutateAsync: userOnboarding,
      isPending: onboardingPending,
    },
  } = useUser(false);
  const {loginUser:{refetch:userRefetch}} = useAuth(false);

  //! handle Resume  Upload
  const handleResumeUpload = async () => {
    if (!file || file.type !== "application/pdf") return;
    const res = await resumeUpload(file);
    if (res.isSuccess) {
      const profile = await refetch();
      setProfile(profile?.data?.data);
      setStep(2);
    };
    setFile(null);
  };

  //! handle Resume OnBoarding
  const handleUserOnboarding = async () => {
    const res = await userOnboarding();
    if (res.isSuccess) {
      const profile = await refetch();
      const loginUser = await userRefetch();
      // set login user for update onboarding info 
    await  setUser(loginUser?.data?.user);
      // set profile data for more user info  
      setProfile(profile?.data?.data);
      setStep(1);
      navigate("/dashboard",{state: "Dashboard"});
    }
  };
  // is user not login send to login page 
  if(!user) return <Navigate to="/login" replace />;

  return (
    <main className="w-full min-svh h-screen p-4 flex flex-col items-center justify-center relative">
      <nav className="flex items-center justify-between gap-2 w-full mb-10 fixed top-2 left-0 right-0 px-4">
        <Button size="sm" variant={"outline"} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </Button>
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
