const controller = "suppliers";
import authenticatedInstance from "../interceptors/auth.interceptor";
import api from "../config/api.config";

export const vehiclesService = {
  getAll: async () => {
    try {
      return await authenticatedInstance.get(`${api.baseUrl}/${controller}`);
    } catch (error: any) {
      /*     CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
  deleteData: async (id: number) => {
    try {
      return await authenticatedInstance.delete(
        `${api.baseUrl}/${controller}/${id}`
      );
    } catch (error: any) {
      /*   CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
  createTranslation: async (supplierData: any) => {
    try {
      return await authenticatedInstance.post(
        `${api.baseUrl}/${controller}`,
        supplierData
      );
    } catch (error: any) {
      /*   CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
  updateData: async (supplierData: any, id: number) => {
    try {
      return await authenticatedInstance.patch(
        `${api.baseUrl}/${controller}/${id}`,
        supplierData
      );
    } catch (error: any) {
      /*  CustomApiErrorToast(error);
      FrontendErrorHandling(error); */
    }
  },
};
