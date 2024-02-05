export default async function GetPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!result.ok) {
    throw new Error("There was an error fetching user post");
  }

  return result.json();
}
