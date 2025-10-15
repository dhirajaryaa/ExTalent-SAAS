import React from "react";
import ReactDOM from "react-dom/client";
import "../../assets/index.css";
import WelcomePage from "./components/Welcome";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="w-full min-h-screen h-auto flex items-center justify-center flex-col mx-auto bg-gradient-to-b from-muted  to-primary/20">
      <WelcomePage />
    </section>
  </React.StrictMode>
);
