import axios from "axios";
import { getCookie } from "../utils";
export class HttpClient {
  instance;
  constructor(baseUrl) {
    this.instance = axios.create({
      baseURL: baseUrl, timeout: 5000, 'Content-Type': 'application/json; charset=utf-8',
    });
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  _handleRequest = (config) => {
    const authToken = atob(getCookie(btoa("epacknook.token")));
    if (authToken) {
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data;";
      }
      //  else {
      //   // config.headers["Content-Type"] = "application/json; charset=utf-8";
      // }
      config.headers["token"] = authToken;
      config.headers["Access-Control-Allow-Origin"] = "*"
      config.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PATCH, PUT, DELETE"
    }
    return config;
  };

  _handleResponse = ({ data }) => data;

  _handleError = (error) => Promise.reject(error);
}
