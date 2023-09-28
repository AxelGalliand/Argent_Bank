import axios from 'axios';

const axiosInstance = axios.create({
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {

      window.location.href = "/sign-in"
      localStorage.removeItem("token")
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
