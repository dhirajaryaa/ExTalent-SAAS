import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, LoginPage, NotFound } from "./pages";

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
    element: <App />, // protected routes
  },
  {
    path: "*",
    element: <NotFound />, // 404 not found page
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
