import { createSlice } from "@reduxjs/toolkit";
import { vehiclesService } from "../../services/vehicles.service";

interface VehiclesState {
  vehiclesData: any;
}

const initialState: VehiclesState = {
  vehiclesData: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehiclesData: (state, action) => {
      state.vehiclesData = JSON.parse(action.payload);
    },
  },
});

export const { setVehiclesData } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;

export const vehiclesSelector = (state: any) => state.vehicles;

export function getAllVehicles() {
  return async (dispatch: any) => {
    const response = await vehiclesService.getAll();
    if (!!response) {
      dispatch(setVehiclesData(JSON.stringify(response.data.data)));
    }
  };
}
