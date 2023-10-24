/* eslint-disable @typescript-eslint/no-explicit-any */

import apiService, { ResponseAPI } from "./api.service";

interface LoginRequest {
  emailOrUsername: string;
  password: string;
}

export async function login(objLogin: LoginRequest): Promise<ResponseAPI> {
  try {
    console.log(objLogin, "objlogin");
    console.log("entrou no catch");
    const response = await apiService.post("/auth/login", objLogin);

    console.log(response, "auth");

    return {
      code: response.data?.code,
      message: response.data?.message,
      data: response.data?.data,
    };
  } catch (error: any) {
    console.log(objLogin);

    return {
      code: error.response?.data?.code,
      message: error.response?.data?.message,
      data: error.response?.data?.data,
    };
  }
}
