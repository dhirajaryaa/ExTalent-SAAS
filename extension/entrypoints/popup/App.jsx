import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { storage } from "#imports";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const saveUser = async () => {
      const user = await storage.getItem("local:user");
      if (user) {
        setUser(JSON.parse(user));
      };      
    };
    saveUser();
  }, []);
  return (
    <div>
      <h1 className="text-5xl bg-primary p-6">{user?.name}</h1>
      <Button>Hello</Button>
    </div>
  );
}

export default App;
