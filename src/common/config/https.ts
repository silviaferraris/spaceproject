/* import axios from "axios";
import { store } from "../../store/store";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});

function getToken() {
  return store.getState().auth.accessToken;
}

const headerIsRequired = true;

instance.interceptors.request.use(
  (config) => {
    if (headerIsRequired) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
 */
