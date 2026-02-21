import { BadgeCheckIcon, EllipsisIcon, UserPlusIcon } from "lucide-react";
import { Button, ButtonSize, ButtonVariant, CardDescription, CardTitle, PostAvatar } from "../ui";
import { type FC } from "react";
import { type PostAuthor } from "@/lib/types";

export const PostAuthorComponent: FC<{ author: PostAuthor }> = ({ author }) => {
  const { account, firstName, lastName } = author;
  const username = account.username;

  return (
    <>
      <div className='flex items-center gap-3'>
        <PostAvatar author={author} />
        <div className='flex flex-col gap-0.5'>
          <CardTitle className='flex items-center gap-1 text-sm'>
            {`${firstName} ${lastName}`}
            <BadgeCheckIcon className='size-4 fill-primary stroke-white' />
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
