import { cn } from "@/lib/utils";
import { Button, ButtonVariant, ButtonSize, Card, CardFooter, CardHeader, CardContent } from "../ui";
import { HeartIcon, MessageCircleIcon, RepeatIcon, SendIcon } from "lucide-react";
import { type FC } from "react";
import { type Post } from "@/lib/types";
import { PostAuthorComponent } from "./post-author";
import { PostImageCarousel } from "./post-image-carousel";

export const PostCard: FC<{ post: Post }> = ({ post }) => {
  const { author, images } = post;

  return (
    <Card>
      <CardHeader className='flex items-center justify-between gap-3 p-0'>
        <PostAuthorComponent author={author} />
      </CardHeader>
      <CardContent className='space-y-6 text-sm p-0'>
        <PostImageCarousel images={images} firstName={author.firstName} />
        <p>
          Lost in the colors of the night 🌌✨ Sometimes the blur reveals more than clarity.{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #AbstractVibes
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #Dreamscape
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #VisualPoetry
          </a>
        </p>
      </CardContent>
      <CardFooter className='flex items-center justify-between gap-1 p-0'>
        <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="Heart">
          <HeartIcon className={cn(true && 'fill-destructive stroke-destructive')} />
          2.1K
        </Button>
        <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="">
          <MessageCircleIcon />
          1.4K
        </Button>
        <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="">
          <RepeatIcon />
          669
        </Button>
        <Button variant={ButtonVariant.ghost} size={ButtonSize.sm} label="">
          <SendIcon />
          1.1K
        </Button>
      </CardFooter>
    </Card>
  );
};
