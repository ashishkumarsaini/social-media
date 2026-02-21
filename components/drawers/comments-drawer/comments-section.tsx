import { PostAvatar } from "@/components/ui";
import { type PostComment } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BadgeCheckIcon, HeartIcon } from "lucide-react";
import { type FC } from "react";

export const CommentSection: FC<{ comments: PostComment[] }> = ({ comments }) => {
  return (
    <div>
      {comments.map(({ _id, author, content, isLiked, likes }) => (
        <div key={_id} className="mb-5 py-1">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 text-sm">
              <PostAvatar author={author} />
              @{author.account.username}
              <BadgeCheckIcon className='size-4 fill-primary stroke-white' />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <HeartIcon className={cn('size-4 stroke-primary', isLiked && 'fill-primary')} />
              {likes}
            </div>
          </div>
          <div className="text-sm">{content}</div>
        </div>
      ))}
    </div>
  );
};
