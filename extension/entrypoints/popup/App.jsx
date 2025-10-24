import React, { useEffect, useState } from "react";
import {
  getLocalStorage,
  getSyncStorage,
  setSyncStorage,
} from "@/utils/extStorage";
import Logo from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ListItem from "./components/ListItem";
import Logout from "./components/Logout";
import { ExternalLink, UserCircle, Github } from "lucide-react";
import { browser } from "#imports";

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [linkedinIngrate, setLinkedinIngrate] = useState(true);

  //check linkedin integration
  useEffect(() => {
    const getLinkedinIngrate = async () => {
      const ingrate = await getSyncStorage("ingrate");
      ingrate ? setLinkedinIngrate(true) : setLinkedinIngrate(false);
    };
    getLinkedinIngrate();
  }, []);

  // check user
  useEffect(() => {
    const getLocalUser = async () => {
      const user = await getLocalStorage("user");
      const token = await getLocalStorage("token");
      token &&
        browser.runtime
          .sendMessage({ action: "GET_USER_INFO" })
          .then((res) => setUser(res?.data?.user));
      if (user) {
        setUser(user);
      }
    };
    getLocalUser();
  }, []);
  // toggle linkedin integration
  const toggleLinkedinIntegration = async () => {
    if (linkedinIngrate) {
      await setSyncStorage("ingrate", !linkedinIngrate);
      setLinkedinIngrate(!linkedinIngrate);
    } else {
      await setSyncStorage("ingrate", !linkedinIngrate);
      setLinkedinIngrate(!linkedinIngrate);
    }
  };
  // sign with github
  async function signInWithGithub() {
    const oauthLink = `${
      import.meta.env.VITE_GITHUB_LOGIN_URL
    }?source=extension`;
    // open login page
    window.open(oauthLink, "_blank");
  }

  return (
    <div className=" bg-background text-background-foreground w-[350px]">
      {user ? (
        <>
          {/* header  */}
          <header className="w-full border-b-1 py-2 px-3">
            <Logo variant="sm" />
          </header>
          <div className="relative mt-2 flex items-center justify-center flex-col gap-1">
            {/* logout btn  */}
            <Logout />
            {/* user info  */}
            <Avatar className={"size-24 border-3 border-primary p-[2px]"}>
              <AvatarImage
                src={user?.avatar}
                alt={user?.name}
                className={"rounded-full object-contain"}
              />
              <AvatarFallback>{user?.name?.split(" ")[0]}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold capitalize">{user?.name}</h2>
            <Button variant={"link"} className={"h-0 cursor-pointer"} asChild>
              <a href={user?.resume?.url} target="_blank" rel="noreferrer">
                View Resume
              </a>
            </Button>
          </div>
          <div className="p-2 px-4 space-y-2">
            {/* linkedin integrate on/off  */}
            <ListItem
              title="Integrate on LinkedIn"
              description=" Enable LinkedIn integration for interact with linkedin pages."
              label="linkedin-integrate"
              enabled={linkedinIngrate}
              action={toggleLinkedinIntegration}
            />
            <div className="space-y-2 w-full mt-3">
              <Button className={"w-full"} asChild>
                <a
                  href={`${import.meta.env.VITE_DASHBOARD_LINK}/dashboard`}
                  target="_blank"
                >
                  <ExternalLink /> View Dashboard
                </a>
              </Button>
              <Button className={"w-full"} asChild variant={"outline"}>
                <a
                  href={`${import.meta.env.VITE_DASHBOARD_LINK}/profile`}
                  target="_blank"
                >
                  <UserCircle /> Manage Profile
                </a>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-50 flex items-center justify-center">
          <Button
            size="lg"
            className={"sm:text-base"}
            onClick={signInWithGithub}
          >
            <Github className="sm:size-5" fill="currentColor" /> Sign in Github
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
