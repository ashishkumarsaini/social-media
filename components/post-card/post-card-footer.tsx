'use client';
import { cn } from "@/lib/utils";
import { Button, ButtonSize, ButtonVariant } from "../ui";
import { HeartIcon, MessageCircleIcon, Bookmark } from "lucide-react";
import { type FC } from "react";
import { useDispatch } from "react-redux";
import { toggleCommentsDrawerState } from "@/lib/store";

type PostCardFooterProps = {
  isLiked: boolean;
  likes: number;
  comments: number;
  isBookmarked: boolean;
  postId: string;
}

export const PostCardFooter: FC<PostCardFooterProps> = ({ isLiked, likes, comments, isBookmarked, postId }) => {
  const dispatch = useDispatch();
  const handleOpenDrawer = () => {
    dispatch(toggleCommentsDrawerState({ shouldOpen: true, postId }));
  };
  return (
    <>
      <Button variant={ButtonVariant.outline} size={ButtonSize.sm} label="Heart">
        <HeartIcon className={cn('stroke-primary', isLiked && 'fill-primary')} />
        {likes}
      </Button>
      <Button variant={ButtonVariant.outline} size={ButtonSize.sm} label="Comment" className="grow justify-between py-0" onClick={handleOpenDrawer}>
        <div className="flex items-center gap-1 border-r border-r-secondary">
          <MessageCircleIcon className={cn('fill-secondary stroke-primary')} />
          {comments}
        </div>
        <div>Write a comment</div>
      </Button>
      <Button variant={ButtonVariant.outline} size={ButtonSize.sm} label="Bookmark" >
        <Bookmark className={cn('stroke-primary', isBookmarked && 'fill-primary')} />
      </Button>
    </>
  );
};
