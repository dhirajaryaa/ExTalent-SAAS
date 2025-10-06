import { Navigate, useLoaderData } from "react-router";
import { Outlet } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar, Header } from "./components/custom";

function App() {
  const { isAuthenticated, user } = useLoaderData();

  return isAuthenticated ? (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full min-h-svh">
          <Header />
          <main className="p-2">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default App;
