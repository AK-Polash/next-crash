import Link from "next/link";

// Note: প্রত্যেক Segment এ dedicated error.js ফাইল না থাকলে ঐ Segment এর layout.js ক্লাইন্ট এ দেখাবে না, কিন্তু যদি ডেডিকেটেড error.js ব্যবহার করি তাহলে ঐ Segment এর layout.js ক্লাইন্ট এ দেখাবে
export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
