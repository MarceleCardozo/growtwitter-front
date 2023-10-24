import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";

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
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
