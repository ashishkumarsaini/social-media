import { type User } from "./user";

export type PostAuthor = {
  _id: string,
  account: User,
  bio: string,
  countryCode: string,
  coverImage: {
    _id: string,
    url: string
  },
  firstName: string,
  lastName: string,
  location: string,
  owner: string,
  phoneNumber:  string,
};

export type PostImage = {
  _id: string,
  localPath:string,
  url: string
}

export type Post = {
  author: PostAuthor,
  comments: number,
  content: string,
  createdAt: string,
  images: PostImage[],
  isBookmarked: boolean,
  isLiked: boolean,
  likes: number,
  tags: string[]
}
