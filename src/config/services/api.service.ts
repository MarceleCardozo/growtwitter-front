/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const apiService = axios.create({
  baseURL: "https://atividade-final-backend-2.onrender.com",
});

console.log(apiService.head);

export default apiService;

export interface ResponseAPI {
  code?: number;
  data?: any;
  message?: string;
}
