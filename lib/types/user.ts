import { type LoginFormSchemaType, type SignUpFormSchemaType } from "../validators";
import { type APIResponseType } from "./api";

export type UserAvatar = {
    _id: string,
    url: string
  }

export type User = {
  _id: string,
  avatar: UserAvatar,
  email: string,
  isEmailVerified: boolean,
  // role: ADMIN, TBD
  username: string
}

export type RegisterUserRequestType = {
  body: SignUpFormSchemaType
};

export type RegisterUserResponseType = APIResponseType<{
  user: User,
}>;

export type LoginUserRequestType = {
  body: LoginFormSchemaType
}

export type LoginUserResponseType = APIResponseType<{
  user: User,
  accessToken: string,
  refreshToken: string
}>;
