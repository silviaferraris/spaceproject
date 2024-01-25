const controller = "vehicles";
import authenticatedInstance from "../common/axios/interceptors/auth.interceptor";
import api from "../common/config/api.config";

export const vehiclesService = {
  getAll: async () => {
    try {
      return await authenticatedInstance.get(`${api.baseUrl}/${controller}`);
    } catch (error: any) {
      /*     CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
  create: async (vehicleData: any) => {
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
