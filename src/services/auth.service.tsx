import axios from "axios";
import api from "../common/config/api.config";
const controller = "auth/login";

export const authService = {
  login: async (email: string, password: string) => {
    try {
      return await axios.post(`${api.baseUrl}/${controller}`, {
        username: email,
        password,
      });
    } catch (error) {
      /*       FrontendErrorHandling(error);
       */
    }
  },
};
