import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./views/login";
import Vehicles from "./views/vehicles";
import addVehicle from "./views/addVehicle";
import trackVehicle from "./views/trackVehicle";
import NotFoundPage from "./views/404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/view",
    Component: Vehicles,
  },
  {
    path: "/add",
    Component: addVehicle,
  },
  {
    path: "/track",
    Component: trackVehicle,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
