import { cn } from "@/lib/utils";
import { Button, ButtonSize, ButtonVariant } from "../ui";
import { HeartIcon, MessageCircleIcon, Bookmark } from "lucide-react";
import { type FC } from "react";

type PostCardFooterProps = {
  isLiked: boolean;
  likes: number;
  comments: number;
}

export const PostCardFooter: FC<PostCardFooterProps> = ({ isLiked, likes, comments }) => {
  return (
    <>
      <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="Heart">
        <HeartIcon className={cn(isLiked && 'fill-destructive stroke-destructive')} />
        {likes}
      </Button>
      <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="">
        <MessageCircleIcon />
        {comments}
      </Button>
      <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="">
        <Bookmark />
        1.1K
      </Button>
    </>
  );
};
