import welcomeImg from "@/assets/images/welcome.svg";
import { Button } from "@/components/ui/button";
import { Youtube, LogIn } from "lucide-react";
import { storage } from '#imports';

function App() {
  console.log(import.meta.env.VITE_GITHUB_LOGIN_URL);
  
  const signInWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_GITHUB_LOGIN_URL}?ext=true`;
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className="w-2xl h-auto rounded-2xl bg-muted/50 shadow-lg p-3 sm:p-6">
        <div className="w-3/4 mx-auto">
          <img
            src={welcomeImg}
            alt="welcome image"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-primary text-center">
          Welcome to ExTalent
        </h1>
        <p className="text-center text-muted-foreground text-sm sm:text-base">
          ExTalent is an extension that helps you find the perfect job for you.
        </p>
        <div className="my-5 flex gap-3 items-center justify-center flex-col w-3/4 mx-auto">
          <Button className={"w-full"} onClick={signInWithGithub}>
            <LogIn />
            Get Started
          </Button>
          <Button variant="outline" asChild className={"w-full"}>
            <a
              href="https://www.youtube.com/@dhirajaryaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="size-5" /> Watch Demo
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
