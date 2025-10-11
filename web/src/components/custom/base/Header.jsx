import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useStore } from "@/store/store";
import { Link, useLocation } from "react-router";
import { GetExtensionsBtn } from "..";

function Header() {
  const user = useStore((s) => s.user);
  const { state, pathname } = useLocation();

  const activePage = state
    ? state
    : pathname.split("/")?.filter(Boolean)?.join(" ");

  return (
    <header className="w-full sticky top-0 left-0 right-0 flex px-4 py-2 items-center justify-between border-b bg-background z-40">
      <div className="flex items-center gap-2 justify-center">
        <SidebarTrigger className={"mt-1"} />
        <h1 className="text-lg sm:text-2xl font-bold text-primary font-sans capitalize">
          {activePage}
        </h1>
      </div>
      {/* user profile  */}
      <div className="flex items-center gap-2 justify-center">
        <GetExtensionsBtn />
        <Link to="/profile" state={"Profile"} >
        <Avatar className={"rounded-lg"}>
          <AvatarImage src={user?.avatar} alt={user?.name} loading="lazy" />
          <AvatarFallback>{user?.name}</AvatarFallback>
        </Avatar>
        </Link>
      </div>
    </header>
  );
}

export default Header;
