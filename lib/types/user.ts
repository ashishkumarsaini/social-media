export type UserAvatar = {
    _id: string,
    url: string
  }

export type User = {
  _id: string,
  avatar: UserAvatar,
  email: string,
  isEmailVerified?: boolean,
  // role: ADMIN, TBD
  username: string
}
