import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function Header() {
  return (
    <header className="bg-yellow-300 w-full sticky top-0 left-0 right-0 flex px-4 py-2">
      <SidebarTrigger />
    </header>
  );
}

export default Header;
