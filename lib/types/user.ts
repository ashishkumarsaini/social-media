import { type LoginFormSchemaType, type SignUpFormSchemaType } from "../validators";
import { type APIResponseType } from "./api";

type User = {
  _id: string,
  avatar: {
    _id: string,
    url: string
  },
  email: string,
  isEmailVerified: boolean,
  // role: ADMIN, TBD
  username: string
}

export type RegisterUserRequestType = {
  body: SignUpFormSchemaType
};

export type RegisterUserResponseType = APIResponseType<User>;

export type LoginUserRequestType = {
  body: LoginFormSchemaType
}

export type LoginUserResponseType = APIResponseType<User>;