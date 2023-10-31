/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from "./api.service";

export interface UserDto {
  id: string;
  name: string;
  username: string;
}

export async function listMe(): Promise<ResponseAPI> {
  try {
    const token = localStorage.getItem("token");

    const response = await apiService.get(`/users/me`, {
      headers: { Authorization: token },
    });

    console.log(response);
    return {
      code: response.data?.code,
      message: response.data?.message,
      data: response.data?.data,
    };
  } catch (error: any) {
    return {
      code: error.response?.data?.code,
      message: error.response?.data?.message,
      data: error.response?.data?.data,
    };
  }
}
