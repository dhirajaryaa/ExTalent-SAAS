import { Upload } from "@/components/custom";
import { Button } from "@/components/ui/button";
import authStore from "@/store/authStore";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import {useState} from "react";
import { useNavigate } from "react-router";

function Onboarding() {
  const [step,setStep] = useState(1);
  const navigate = useNavigate();
  const { skipOnboarding } = authStore.getState();
  const handleSkipOnboarding = () => {
    skipOnboarding();
    navigate("/dashboard");
  };

  return (
    <main className="w-full min-svh p-4">
      <nav className="flex items-center justify-between gap-2 w-full mb-10">
        <Button size="icon-sm" variant={"outline"} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </Button>
        <Button variant={"ghost"} onClick={handleSkipOnboarding}>
          Skip
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
        {step ? <Upload setStep={setStep}/> : null}
        <Button>
          Next <ArrowRight size={18} />
        </Button>
      </section>
    </main>
  );
}

export default Onboarding;
