import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login";
import Vehicles from "./vehicles";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/vehicles",
    Component: Vehicles,
  },
]);
