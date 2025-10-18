// src/pages/ExtensionWelcome.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Step from "./Step";
import { ExternalLink, Github } from "lucide-react";
import Logo from "@/components/custom/Logo";
import Footer from "@/components/custom/Footer";

export default function Welcome() {
  async function signInWithGithub() {
    const oauthLink = `${
      import.meta.env.VITE_GITHUB_LOGIN_URL
    }?source=extension`;
    // open login page
    window.open(oauthLink, "_blank");
  }
  return (
    <>
      {/* Logo */}
      <Logo />

      {/* Welcome Card */}
      <Card className={"bg-full border-0 shadow-none"}>
        <CardContent className="text-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
              Extension Installed Successfully 🎉
            </h1>
            <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl">
              You’re all set! ExTalent is now active on LinkedIn — scan job
              posts and view your personalized match score instantly.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-3 max-w-md mx-auto">
            <Step num="1" text="Open LinkedIn in a new tab." />
            <Step
              num="2"
              text="Find any job post and click 'Scan with ExTalent'."
            />
            <Step
              num="3"
              text="View your match score and missing skills instantly."
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-4">
            <Button
              size="lg"
              className={"sm:text-base"}
              onClick={signInWithGithub}
            >
              <Github className="sm:size-5" fill="currentColor" /> Sign in
              Github
            </Button>
            <Button
              variant="outline"
              className={"sm:text-base"}
              size="lg"
              asChild
            >
              <a
                href={`${import.meta.env.VITE_DASHBOARD_LINK}/dashboard`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="sm:size-5" />
                Open Dashboard
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Footer />
    </>
  );
}
