"use client";

export default function Button() {
  return (
    <button
      className="bg-green-500 px-3 py-2 rounded-md"
      onClick={() => console.log("Clicked")}
    >
      Click Here
    </button>
  );
}
