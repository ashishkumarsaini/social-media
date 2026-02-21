import { Container } from "@/components/layout";
import { PostCard } from "@/components/post-card";
import post from '../mocks/post.json';

export default function Home() {

  return (
    <Container className="py-3.5">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-12 gap-4">
        <div className="col-start-1 col-end-1 m-auto max-w-xl lg:w-full lg:col-start-1 lg:col-end-4">One</div>
        <div className="col-start-1 col-end-1 m-auto max-w-xl lg:w-full lg:col-start-4 lg:col-end-10">
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
        <div className="hidden lg:block col-start-10 col-end-13">.</div>
      </div>
    </Container>
  );
}
