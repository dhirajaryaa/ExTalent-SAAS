import { Navigate, useLoaderData } from "react-router";
import { Outlet } from "react-router";

function App() {
  const { isAuthenticated, user } = useLoaderData();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default App;
