import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./global.scss";
import Home from "./views/Home/home"
import { db } from './mock/tableMock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={db} />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
