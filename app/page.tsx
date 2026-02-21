import { Container } from "@/components/layout";
import { PostCard } from "@/components/post-card";
import post from '../mocks/post.json';

export default function Home() {

  return (
    <Container className="py-3.5">
      <div className="grid grid-cols-12 grid-rows-1 gap-4">
        <div className="col-start-1 col-end-4">.</div>
        <div className="col-start-4 col-end-10">
          <div className="mb-4">
            <PostCard post={post} />
          </div>
          <div className="mb-4">
            <PostCard post={post} />
          </div>
          <div className="mb-4">
            <PostCard post={post} />
          </div>
          <div className="mb-4">
            <PostCard post={post} />
          </div>
        </div>
        <div className="col-start-10 col-end-13">.</div>
      </div>
    </Container>
  );
}
