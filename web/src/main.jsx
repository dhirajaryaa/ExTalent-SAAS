import { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Dashboard,
  Home,
  JobDetails,
  JobMatch,
  LoginPage,
  NotFound,
  Onboarding,
  UserProfile,
} from "./pages";
import { Loading } from "./components/custom";
import authChecker from "./lib/authChecker";
import { Toaster } from "./components/ui/sonner";

// query client create
const queryClient = new QueryClient();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // landing page
  },
  {
    path: "login",
    element: <LoginPage />, // login page
  },
  {
    path: "onboarding",
    element: <Onboarding />, // onboarding page
  },
  {
    loader: authChecker,
    element: <App />, //! protected routes
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "dashboard", //* dashboard page
        element: <Dashboard />,
      },
      {
        path: "profile", //* user profile page
        element: <UserProfile />,
      },
      {
        path: "job-match", //* job match page
        element: <JobMatch />,
      },
      {
        path: "job-match/:jobId", //* job match view page
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // 404 not found page
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={appRouter} />
          <Toaster richColors  />
        </Suspense>
      </QueryClientProvider>
  </StrictMode>
);
