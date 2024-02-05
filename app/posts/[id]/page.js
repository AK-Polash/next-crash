import { Suspense } from "react";
import Comments from "@/app/_components/Comments";
import GetPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import getAllPost from "@/lib/getAllPost";

// for creating Dynamic Metadata name has to be exact same "generateMetadata"
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await GetPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = GetPost(id);
  const commentPromise = getPostComments(id);
  // const [post, comments] = await Promise.all([postPromise, commentPromise]);
  const post = await postPromise;

  return (
    <div className="bg-gray-600 rounded-sm p-5">
      <h1 className="text-2xl text-blue-500">{post.title}</h1>
      <p className="mt-3 mb-1">{post.body}</p>
      <hr />

      <Suspense
        fallback={<h2 className="mt-8 text-red-500">Loading Comments...</h2>}
      >
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPost();
  return posts.map((post) => ({ id: post.id.toString() }));
}
