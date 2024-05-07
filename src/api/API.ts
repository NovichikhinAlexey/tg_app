import axios, {AxiosResponse} from "axios";
import {ActivateRequest, ProfileRequest, ProfileResponse, RegisterRequest, TapRequest} from "../types/types";

const $api = axios.create({
  baseURL: 'https://wallet-api-uat.simple-spot.biz/api/v1/public/telegram'
})


export const AuthApi = {
  profile: async (data: ProfileRequest): Promise<AxiosResponse<ProfileResponse>> => {
    return $api.post('/profile/', data);
  },
  register: async (data: RegisterRequest): Promise<AxiosResponse> => {
    return $api.post('/register/', data);
  },
  tap: async (data: TapRequest): Promise<AxiosResponse> => {
    return $api.post('/tap/', data);
  },
  farmingActivate: async (data: ActivateRequest): Promise<AxiosResponse> => {
    return $api.post('/activate/', data);
  },
  collect: async (data: ActivateRequest): Promise<AxiosResponse> => {
    return $api.post('/claim/', data);
  }
}