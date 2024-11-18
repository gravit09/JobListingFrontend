import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Routes/MainLayout";
import Home from "./Pages/Home";
import Organisations from "./Pages/Organisations";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { RouteProvider } from "./store/navRouteStore";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./utils/AuthProvider";
import Jobs from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/orgs",
          element: <Organisations />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AuthProvider>
      <RouteProvider>
        <RouterProvider router={router} />
      </RouteProvider>
    </AuthProvider>
  );
}

export default App;
