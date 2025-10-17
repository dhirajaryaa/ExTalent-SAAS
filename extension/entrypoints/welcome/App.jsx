import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Success from "./components/oauth/Success";
import Error from "./components/oauth/Error";

function App() {
  const [status, setStatus] = useState("success");
  // render component fn.
  function renderComp(status) {
    switch (status) {
      case "success":
        return <Success />;
      case "error":
        return <Error />;
      default:
        return <Welcome />;
    }
  }
  return (
    <section
      className={`w-full min-h-screen h-auto flex items-center justify-center flex-col mx-auto bg-gradient-to-b from-muted  ${
        status === "error" ? "to-destructive/20" : "to-primary/20"
      }`}
    >
      {renderComp(status)}
    </section>
  );
}

export default App;
