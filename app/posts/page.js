import Link from "next/link";
import getAllPost from "@/lib/getAllPost";

export default async function Posts() {
  const allPost = await getAllPost();

  return (
    <div>
      <h1 className="my-3 text-2xl">All Posts</h1>
      <ul>
        {allPost.map((item, index) => (
          <li
            className="ml-5 hover:text-blue-400 transition-all duration-75 ease-linear"
            key={item.id}
          >
            <Link href={`posts/${item.id}`}>
              {`${index + 1}. `}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
