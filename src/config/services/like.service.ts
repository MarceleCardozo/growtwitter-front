/* eslint-disable @typescript-eslint/no-explicit-any */

import apiService from "./api.service";
import { TweetDTO } from "./tweet.service";

export interface LikeDto {
  id?: string;
  tweetId?: string;
  userId?: string;
}

export async function create(data: LikeDto) {
  try {
    console.log(data, "data ###");
    const like = {
      userId: data.userId,
      tweetId: data.tweetId,
    };

    const token = localStorage.getItem("token");

    const response = await apiService.post("/likes", like, {
      headers: { Authorization: token },
    });

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

export async function deleteLike(data: LikeDto) {
  try {
    console.log(data, "data like");

    const like = {
      id: data.id,
    };

    const token = localStorage.getItem("token");

    const response = await apiService.delete(`/likes/${like.id}`, {
      headers: {
        Authorization: token,
      },
    });

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

export async function list(data: TweetDTO) {
  try {
    const token = localStorage.getItem("token");

    const response = await apiService.get(`/likes/${data.id}`, {
      headers: {
        Authorization: token,
      },
    });

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
