import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import authStore from "@/store/authStore";
import uiStore from "@/store/uiStore";
import React from "react";

function Header() {
  const { user } = authStore();
    const {activePage} = uiStore()

  return (
    <header className="w-full sticky top-0 left-0 right-0 flex px-4 py-2 items-center justify-between border-b">
      <div className="flex items-center gap-2 justify-center">
      <SidebarTrigger className={'mt-1'}/>
      <h1 className="text-lg sm:text-2xl font-bold text-primary font-sans">{activePage}</h1>
      </div>
      {/* user profile  */}
      <div className="flex items-center gap-2 justify-center">
        <p className="hidden sm:block text-base font-semibold">
          {user?.name}
        </p>
        <Avatar className={"rounded-lg"}>
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback>{user?.name}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
