import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import {
  LayoutGridIcon,
  BriefcaseBusinessIcon,
  UserCircleIcon,
  StarIcon,
  SearchIcon
} from "lucide-react";
import { Link } from "react-router";
import { Logo } from "..";
import NavLinks from "./NavLinks";
import Logout from "./Logout";

function AppSidebar() {
  const links = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutGridIcon,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: UserCircleIcon,
    },
     {
      title: "Job Scan",
      url: "/job-scan",
      icon: SearchIcon,
    },
    {
      title: "Job Matches",
      url: "/job-match",
      icon: BriefcaseBusinessIcon,
    },
    {
      title: "Saved Jobs",
      url: "/saved-job",
      icon: StarIcon,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        {/* logo  */}
        <SidebarMenu>
          <SidebarMenuButton asChild className={"w-full py-5 px-4"}>
            <Link to={"/dashboard"}>
              <Logo />
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* nav links  */}
        <NavLinks links={links} />
      </SidebarContent>
      <SidebarFooter>
        {/* logout  */}
        <Logout />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
