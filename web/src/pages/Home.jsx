import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FileText,
  LayoutDashboard,
  Target,
  SquarePlay,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/custom";

function Home() {
  const features = [
    {
      title: "Smart Job Matching",
      description:
        "AI-powered engine that finds roles perfectly aligned with your resume and skills.",
      icon: Briefcase,
    },
    {
      title: "Resume Insights",
      description:
        "Get instant feedback on strengths and gaps to make your profile stand out.",
      icon: FileText,
    },
    {
      title: "Career Dashboard",
      description:
        "Track applications, matches, and progress in one simple dashboard.",
      icon: LayoutDashboard,
    },
    {
      title: "Skill Gap Guidance",
      description:
        "Discover the skills you need to learn next for better opportunities.",
      icon: Target,
    },
  ];

  const faqs = [
    {
      question: "What is ExTalent?",
      answer:
        "ExTalent is an AI-powered platform that analyzes your resume and matches you with jobs that best fit your skills and experience.",
    },
    {
      question: "How does ExTalent calculate my job match score?",
      answer:
        "Our algorithm compares your resume, skills, and experience with job requirements, then generates a personalized score.",
    },
    {
      question: "Is ExTalent free to use?",
      answer:
        "Yes, you can get started for free. Premium features like detailed insights and advanced analytics may be available later.",
    },
    {
      question: "Do I need to upload my resume?",
      answer:
        "Yes, uploading your resume helps ExTalent give you accurate job matches and skill gap recommendations.",
    },
    {
      question: "Can ExTalent help me improve my chances of getting hired?",
      answer:
        "Absolutely! ExTalent highlights areas where you can improve your resume and skills, so you can become a stronger candidate.",
    },
  ];

  return (
    <main className="w-full min-h-screen  bg-gradient-to-b from-slate-50 to-primary/30 ">
      <section className="w-full h-full max-w-6xl mx-auto relative">
        <Navbar />
        {/* hero  */}
        <div
          className="flex items-center gap-3 justify-center flex-col text-center
        my-30"
        >
          {/* label  */}
          <div className="flex items-center gap-3 border border-chart-1 bg-chart-1/20 px-5 py-2 rounded-full my-3">
            <span className="relative flex items-center justify-center size-4">
              <span className="absolute size-4 animate-ping rounded-full bg-chart-1/30"></span>
              <span className="relative size-3 rounded-full bg-chart-1"></span>
            </span>
            <span className="text-xs font-semibold text-chart-1">
              Preview Mode
            </span>
          </div>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            🚀 Find Your Best Job Match in Minutes
          </h1>
          <p className="text-sm text-gray-600 sm:text-lg w-xl">
            ExTalent helps candidates discover roles that match their skills,
            resume, and goals—powered by AI insights.
          </p>
          <div className="flex items-center gap-3 mt-6">
              <Button
                asChild
                size={"lg"}
                className="cursor-pointer flex gap-2 items-center"
              >
            <Link to="/login">
                Get Started Free <ArrowRight size={18} />
            </Link>
              </Button>
            <Button
              size={"lg"}
              variant="outline"
              className={"cursor-pointer flex gap-2 items-center"}
            >
              How it work
              <SquarePlay size={18} />
            </Button>
          </div>
        </div>
        {/* features  */}
        <div className="flex items-center gap-3 justify-center flex-col text-center">
          <h2 className="font-semibold sm:text-2xl text-xl text-gray-800">
            Main Features
          </h2>
          <p className="text-sm text-gray-600">
            Everything you need to find the right job—faster, smarter, and
            easier.
          </p>
          <div className="flex gap-4 items-center my-8 w-full justify-center flex-wrap">
            {features.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 flex-col border-2 border-gray-200 rounded-xl p-4 w-full max-w-xs bg-background/50 shadow-lg"
                >
                  {feature.icon && (
                    <feature.icon className="size-8 text-primary" />
                  )}
                  <h4 className="font-semibold text-sm sm:text-lg">
                    {feature.title}
                  </h4>
                  <p className="opacity-70 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* faq  */}
        <div className="flex items-center gap-3 justify-center flex-col text-center mt-10">
          <h2 className="font-semibold sm:text-2xl text-xl text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Everything you need to know about ExTalent, in one place.
          </p>
          {/* <div> */}
          {faqs.map((item, index) => {
            return (
              <Accordion
                key={item.question}
                type="single"
                collapsible
                className="w-full max-w-2xl"
                defaultValue="item-1"
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent
                    className={"text-left bg-background/50 p-2 rounded-sm"}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
        {/* </div> */}

        {/* footer  */}
        <footer className="mt-10 border-t border-gray-50">
          <div className="max-w-7xl py-5 mx-auto px-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            {/* Links */}
            <div className="flex gap-4 mb-2 md:mb-0">
              <Link to="/privacy-policy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </div>

            {/* Copyright */}
            <p className="mt-2 md:mt-0 text-sm">
              © {new Date().getFullYear()} ExTalent. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default Home;