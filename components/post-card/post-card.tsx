import { Card, CardFooter, CardHeader, CardContent } from "../ui";
import { type FC } from "react";
import { type Post } from "@/lib/types";
import { PostAuthorComponent } from "./post-author";
import { PostImageCarousel } from "./post-image-carousel";
import { Text, TextType } from "../typography";
import { PostCardFooter } from "./post-card-footer";

export const PostCard: FC<{ post: Post }> = ({ post }) => {
  const { author, images, comments, content, isLiked, likes, tags } = post;

  return (
    <Card>
      <CardHeader className='flex items-center justify-between gap-3 p-0'>
        <PostAuthorComponent author={author} />
      </CardHeader>
      <CardContent className='space-y-6 text-sm p-0'>
        <PostImageCarousel images={images} firstName={author.firstName} />
        <Text>{content}</Text>
        {tags.map((tag) => <Text key={tag} type={TextType.span}>#{tag} </Text>)}
      </CardContent>
      <CardFooter className='flex items-center justify-between gap-1 p-0'>
        <PostCardFooter isLiked={isLiked} likes={likes} comments={comments} />
      </CardFooter>
    </Card>
  );
};
