import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <style>
      {`
        body, html {
          height: 100%;
          margin: 0;
          overflow: hidden;
        }
      `}
    </style>
    <RouterProvider router={router} />
  </React.StrictMode>
);
