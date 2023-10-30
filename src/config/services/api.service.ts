/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default apiService;

export interface ResponseAPI {
  code?: number;
  data?: any;
  message?: string;
}
