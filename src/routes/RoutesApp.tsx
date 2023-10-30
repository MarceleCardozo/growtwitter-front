import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ToExplore from "../pages/ToExplore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/toexplore",
    element: <ToExplore />,
  },
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
