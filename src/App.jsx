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
import AppliedJobs from "./Components/Dashboard/AppliedJobs";
import ListedJobs from "./Components/Dashboard/ListedJobs";
import Organization from "./Components/Dashboard/Organization";
import JobListing from "./Components/Dashboard/JobListing";
import HomeLayout from "./Routes/HomeLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/jobs",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Jobs />,
        },
      ],
    },
    {
      path: "/orgs",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Organisations />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "job-listings",
          element: <JobListing />,
        },
        {
          path: "",
          element: <AppliedJobs />,
        },
        {
          path: "list-job",
          element: <ListedJobs />,
        },
        {
          path: "organization",
          element: <Organization />,
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
