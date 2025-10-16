// src/pages/ExtensionWelcome.tsx
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import Step from "./Step";
import { ExternalLink, Github } from "lucide-react";
import { browser } from "#imports";

export default function WelcomePage() {
  async function signInWithGithub() {
    console.log("I am working ❤️");
    const link = `${import.meta.env.VITE_GITHUB_LOGIN_URL}?source=extension`;
    browser.windows.create({ url: link, focused: true });
  }
  return (
    <>
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-5 justify-center">
        <img
          src={logoImg}
          alt="ExTalent Logo"
          className="size-10 sm:size-12 rounded-full"
        />
        <span className="text-xl sm:text-3xl cursor-pointer font-semibold capitalize">
          ExTalent
        </span>
      </div>

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
            <Button size="lg" className={"sm:text-base"} onClick={signInWithGithub}>
              {/* <a
                href={`${import.meta.env.VITE_DASHBOARD_LINK}/login`}
                target="_blank"
                rel="noreferrer"
              > */}
              <Github className="sm:size-5" fill="currentColor" /> Sign in &
              Connect
              {/* </a> */}
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
      <footer className="mt-8 text-sm text-foreground/80 text-center">
        Need help?{" "}
        <a
          href={`${import.meta.env.VITE_SUPPORT_LINK}`}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4 text-primary hover:underline"
        >
          Visit our Help Center
        </a>
      </footer>
    </>
  );
}
