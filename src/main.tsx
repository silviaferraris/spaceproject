import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./common/theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
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
    </ThemeProvider>
  </React.StrictMode>
);
