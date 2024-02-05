import { notFound } from "next/navigation";

export default function Id({ params }) {
  const { id } = params;
  console.log(params);

  if (id === "3") {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>Blog ID: {id}</div>
    </div>
  );
}
