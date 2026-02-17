import { api, buildRequestUrl } from "../api"
import { type RegisterUserRequestType, type RegisterUserResponseType } from "../types"

export const registerUser = (requestOptions: RegisterUserRequestType)=>{
  // console.log(buildRequestUrl('/users/register'));

  return api.post<RegisterUserResponseType>(buildRequestUrl('/users/register'),requestOptions);
}