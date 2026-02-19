import { type User } from "./user";

export type AuthInitialState = {
  accessToken: string,
  refreshToken: string,
  user: User
}
