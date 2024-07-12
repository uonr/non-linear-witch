import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg font-bold">non-linear witch</h1>
      <p>
        <Link href="/posts">posts</Link>
      </p>
    </main>
  );
}
