import { createSlice } from "@reduxjs/toolkit";
import { vehiclesService } from "../../services/vehicles.service";

interface VehiclesState {
  isLoading: boolean;
  isLoadingVehiclesData: boolean;
  vehiclesData: any;
}

const initialState: VehiclesState = {
  isLoading: false,
  isLoadingVehiclesData: false,
  vehiclesData: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setIsLoadingVehicleData: (state, actions) => {
      state.isLoadingVehiclesData = actions.payload;
    },
    setVehiclesData: (state, action) => {
      state.vehiclesData = JSON.parse(action.payload);
    },
  },
});

export const { setIsLoadingVehicleData, setVehiclesData } =
  vehiclesSlice.actions;

export default vehiclesSlice.reducer;

export const vehiclesSelector = (state: any) => state.vehicles;

export function getAllVehicles() {
  return async (dispatch: any) => {
    try {
      dispatch(setIsLoadingVehicleData(true));
      const response = await vehiclesService.getAll();
      if (!!response) {
        dispatch(setVehiclesData(JSON.stringify(response.data.data)));
      }
    } finally {
      dispatch(setIsLoadingVehicleData(false));
    }
  };
}
