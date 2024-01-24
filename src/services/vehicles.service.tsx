const controller = "suppliers";

export const vehiclesService = {
  getAllVehicles: async () => {
    try {
      return await authenticatedInstance.get(`${api.baseUrl}/${controller}`);
    } catch (error: any) {
      /*     CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
  createVehicle: async (vehicleData: any) => {
    try {
      return await authenticatedInstance.post(
        `${api.baseUrl}/${controller}`,
        vehicleData
      );
    } catch (error: any) {
      /*   CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
};
