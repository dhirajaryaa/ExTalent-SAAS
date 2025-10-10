import { Navigate, Outlet } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar, Header } from "./components/custom";
import { useStore } from "./store/store";

function App() {
  const isAuthenticated = useStore((s) => s.isAuthenticated);
  const user = useStore((s) => s.user);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  //  new user navigate to Onboarding page
  if (user.isOnboarding) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full min-h-svh">
        <Header />
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
