import axios from "axios";

// Set config defaults when creating the instance
const axiosObject = axios.create({
  headers: {
    "Content-Type": "application/json",
    "customer-id": "3395462520",
    "x-api-key": "zqt_ymKleI-dxJYkdCrdQk592Mjg8kD3UwVHS8ZWMw"
  }
});

axiosObject.interceptors.request.use(
  async function (config) {
    // Do something before request is sent such as attaching auth token
    /*
    if (token) {
      config = {
        ...config,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    }
    */
    return config;
  },
  function (error) {
    // Do something with request error
    // eslint-disable-next-line no-console
    console.error("error: interceptors", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosObject.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosObject;


export const axiosObjects = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
});

axiosObject.interceptors.request.use(
  async function (config) {
    // Do something before request is sent such as attaching auth token
    /*
    if (token) {
      config = {
        ...config,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    }
    */
    return config;
  },
  function (error) {
    // Do something with request error
    // eslint-disable-next-line no-console
    console.error("error: interceptors", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosObject.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

