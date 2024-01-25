import axios from "axios";
import api from "../../config/api.config";
import { store } from "../injectors";

const authenticatedInstance = axios.create({
  baseURL: api.baseUrl,
});

const addAuthHeader = (config: any) => {
  const accessToken = store.getState().auth.accessToken;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
};

authenticatedInstance.interceptors.request.use(addAuthHeader);

export default authenticatedInstance;
