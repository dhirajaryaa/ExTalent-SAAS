import authStore from "@/store/authStore";
import useAuth from "@/hooks/useAuth";
import { LogOut, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";
import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";

function Logout() {
  const navigate = useNavigate();
  const {
    logoutUser: { isPending, mutateAsync },
  } = useAuth();
  const { removeUser } = authStore.getState();

  async function logoutHandler() {
    removeUser();
    localStorage.removeItem("token"); // remove token
    await mutateAsync();
    navigate("/login");
  }
  return (
    <SidebarMenu>
      <SidebarMenuButton onClick={logoutHandler} className={"py-5"}>
        <div className="py-6 flex gap-3 text-base sm:text-[15px] px-3 font-medium text-sidebar-accent-foreground/60 ">
          <span>
            {isPending ? (
              <Loader2 className="size-5 sm:size-6 animate-spin" />
            ) : (
              <LogOut className="size-5 sm:size-6" />
            )}
          </span>
          <span>Logout</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenu>
  );
}

export default Logout;
