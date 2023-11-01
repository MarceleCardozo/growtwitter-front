/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from "./api.service";
import { LikeDto } from "./like.service";
import { UserDto } from "./user.service";

export interface TweetRequest {
  content: string;
  type: "tweet" | "retweet";
  tweetId?: string;
}

export interface TweetDTO {
  id: string;
  userId: string;
  content: string;
  User: UserDto;
  Likes: LikeDto[];
}

export async function create(objTweet: TweetRequest): Promise<ResponseAPI> {
  try {
    const tweet = {
      content: objTweet.content,
      type: objTweet.type,
      tweetId: objTweet.tweetId,
    };

    const token = localStorage.getItem("token");

    const response = await apiService.post("/tweets", tweet, {
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

export async function list() {
  try {
    const token = localStorage.getItem("token");

    const response = await apiService.get("/tweets", {
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
