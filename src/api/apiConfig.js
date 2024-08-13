import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";

// Create an instance of axios with base URL and headers
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to include Authorization token in headers and set cache control
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust based on your token storage method
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Add cache control headers
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
