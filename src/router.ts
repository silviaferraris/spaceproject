import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./views/login";
import Vehicles from "./views/vehicles";
import addVehicle from "./views/addVehicle";
import trackVehicle from "./views/trackVehicle";
/* import { Login } from "./views/login";
import { Login } from "./views/login";
import { Login } from "./views/login"; */

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
]);
