import { BadgeCheckIcon, EllipsisIcon, UserPlusIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, Button, ButtonSize, ButtonVariant, CardDescription, CardTitle } from "../ui";
import { type FC } from "react";
import { type PostAuthor } from "@/lib/types";

export const PostAuthorComponent: FC<{ author: PostAuthor }> = ({ author }) => {
  const { account, firstName, lastName } = author;

  const username = account.username;
  const avatarUrl = account.avatar.url;
  const authorName = firstName + lastName;

  return (
    <>
      <div className='flex items-center gap-3'>
        <Avatar className='ring-ring ring-2'>
          <AvatarImage src={avatarUrl} alt='Hallie Richards' />
          <AvatarFallback className='text-xs'>PG</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-0.5'>
          <CardTitle className='flex items-center gap-1 text-sm'>
            {authorName} <BadgeCheckIcon className='size-4 fill-primary stroke-white' />
          </CardTitle>
          <CardDescription>@{username}</CardDescription>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={ButtonVariant.outline} size={ButtonSize.sm} label="Follow">
          <UserPlusIcon />
          Follow
        </Button>
        <Button variant={ButtonVariant.ghost} size={ButtonSize.icon} label='Toggle menu'>
          <EllipsisIcon />
        </Button>
      </div>
    </>
  );
};
