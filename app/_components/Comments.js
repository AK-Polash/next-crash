export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h2 className="mt-8">Comments</h2>
      <ul>
        {comments.map((item) => (
          <li key={item.id} className="mt-2 p-2 rounded-md bg-gray-500">
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
