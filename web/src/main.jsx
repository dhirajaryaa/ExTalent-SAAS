import { Suspense,StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard, Home, LoginPage, NotFound } from "./pages";
import { Loading } from "./components/custom";

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
    element: <App />, //! protected routes
    children: [
      {
        path: "dashboard", //* dashboard page
        element: <Dashboard />,
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
    <QueryClientProvider client={queryClient} >
      <Suspense fallback={<Loading />}>
      <RouterProvider router={appRouter} />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);
