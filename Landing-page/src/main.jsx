import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },

  {
    path: "",
    element: <Menu />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
