// src/pages/WelcomePage.tsx
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Zap,
  CheckCircle2
} from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <span className="text-xl font-semibold">ExTalent</span>
        </div>
        <div className="space-x-3">
          <Button variant="ghost">Docs</Button>
          <Button variant="outline">Sign in</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Get job-fit faster — <br className="hidden sm:block" />
            job match scores inside LinkedIn.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-prose">
            ExTalent scans job posts, identifies missing skills, and shows your
            personalized match score — right on LinkedIn.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Install Extension <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">See Demo</Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No credit card needed • Works instantly with your LinkedIn profile
          </p>
        </div>

        {/* Hero Visual Card */}
        <Card className="w-full max-w-md mx-auto shadow-xl border border-slate-100 dark:border-slate-800 rounded-2xl">
          <CardContent className="p-6 bg-gradient-to-tr from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                Match Score
                <Badge className="ml-2 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
                  87%
                </Badge>
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  5/6 key skills matched
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  Resume alignment: Excellent
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-500 h-4 w-4" />
                  Add “Next.js” to improve fit
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4">
                View full report
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-indigo-600" />}
            title="Instant Match Score"
            desc="See how well you fit a job right on LinkedIn with real-time scoring."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-indigo-600" />}
            title="Missing Skills Insight"
            desc="Find the exact skills you need to improve your profile instantly."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-indigo-600" />}
            title="Save & Track Jobs"
            desc="Keep a record of every job you scanned and monitor your improvement."
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 space-y-10">
        <h2 className="text-3xl font-bold text-center">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <Step num="1" text="Install the ExTalent Chrome Extension" />
          <Step num="2" text="Open LinkedIn and scan a job post" />
          <Step num="3" text="View your match score and suggestions" />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} ExTalent. All rights reserved.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            <a
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Docs
            </a>
            <a
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Reusable components */
function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="p-6 border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition transform rounded-lg">
      <CardContent className="space-y-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/40 mx-auto">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
          {desc}
        </p>
      </CardContent>
    </Card>
  )
}

function Step({ num, text }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-200 font-semibold">
        {num}
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 max-w-[200px]">
        {text}
      </p>
    </div>
  )
}
