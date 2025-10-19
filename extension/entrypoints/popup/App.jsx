import React, { useEffect, useState } from "react";
import { getLocalStorage } from "@/utils/extStorage";
import Logo from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";
import { LogOut,Moon,Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Switch } from "@/components/ui/switch";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getLocalUser = async () => {
      const user = await getLocalStorage("user");
      if (user) {
        setUser(user);
      }
    };
    getLocalUser();
  }, []);

  return (
    <div className=" bg-background text-background-foreground w-[350px]">
      <header className="w-full border-b-1 py-2 px-3">
        <Logo variant="sm" />
      </header>
      <div className="relative mt-2 flex items-center justify-center flex-col gap-1">
        {/* logout btn  */}
        <Button
          variant="secondary"
          size="icon-sm"
          className={"absolute top-1 right-2"}
        >
          <LogOut />
        </Button>
   
        {/* user info  */}
        <Avatar className={"size-24 border-3 border-primary p-[2px]"}>
          <AvatarImage
            src={user?.avatar}
            alt={user?.name}
            className={"rounded-full"}
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
      {/* linkedin integrate on/off  */}
      <div className="p-2 px-4 mb-3">

      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Integrate with LinkedIn</ItemTitle>
          <ItemDescription className={'text-xs'}>
            Enable LinkedIn integration for interact with linkedin pages.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch id="linkedin-integrate" />
          <label htmlFor="linkedin-integrate" hidden>
            Airplane Mode
          </label>
        </ItemActions>
      </Item>
      </div>
    </div>
  );
}

export default App;
