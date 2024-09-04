import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Routes/MainLayout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Organisations from "./Pages/Organisations";
import About from "./Pages/About";
import Login from "./Pages/login";
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
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/orgs",
          element: <Organisations />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
