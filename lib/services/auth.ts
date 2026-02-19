import { api, buildRequestUrl } from "../api";
import type { LoginUserRequestType, LoginUserResponseType, RegisterUserRequestType, RegisterUserResponseType } from "../types";

export const registerUser = (requestOptions: RegisterUserRequestType)=>{
  return api.post<RegisterUserResponseType>(buildRequestUrl('/users/register'),requestOptions);
};

export const loginUser = (requestOptions: LoginUserRequestType)=>{
  return api.post<LoginUserResponseType>(buildRequestUrl('/users/login'),requestOptions);
};
