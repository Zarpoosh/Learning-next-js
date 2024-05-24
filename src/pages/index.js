import { Inter } from "next/font/google";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h2 className="text-4xl font-bold m-3">Home page</h2>

      <ul>
        <li>
          <Link href="/blog/posts">BLOG</Link>
        </li>
      </ul>
    </div>
  );
}
