import Link from "next/link";
import { posts } from "../../post";

export default async function Page() {
  return (
    <main>
      <h1 className="text-lg font-bold">Posts</h1>
      {posts.map((post) => (
        <ul key={post.slug}>
          - <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
        </ul>
      ))}
    </main>
  );
}
