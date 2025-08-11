import React from "react";
import Show from "./pages/Show";
import New from "./pages/New";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditListingForm from "./pages/Edit";
import Auth from "./pages/Auth";
import "./App.css"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {path: "/", element: <Home/>},
        { path: "/listings", element: <Card /> },
        { path: "/listings/:_id", element: <Show /> },
        { path: "/new", element: <New /> },
        {path: "/listings/:_id/edit" , element: <EditListingForm/>},

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;