// ito pagka `npm install axios` mo gagana na to
import axios from "axios";
// ito namang URL variable na to ito yung port or server kung san nagrarun yung php artisan serve mo
const URL = "http://127.0.0.1:8000";
// ito kinopya ko lang to hahaha
const instance = axios.create({
  baseURL: URL,
  withCredentials: false,
});

instance.interceptors.request.use(
  function (request) {
    request.headers["Content-Type"] = "application/json,text/html";
    request.headers["Accept"] = "Application/json";
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
