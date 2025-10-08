import { Navigate, useLoaderData } from "react-router";
import { Outlet } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar, Header } from "./components/custom";
import authStore from "./store/authStore";

function App() {
  const { isAuthenticated } = useLoaderData();
  const user = authStore(state => state.user);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

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