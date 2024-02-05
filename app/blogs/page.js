import Link from "next/link";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Bog 1 description" },
    { id: 2, title: "Blog 2", description: "Bog 2 description" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <ul>
        {blogs.map((item) => (
          <li className="mb-5" key={item.id}>
            <Link href={`/blogs/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
