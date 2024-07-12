import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import { posts, postsMap } from "../../../post";
import { notFound } from "next/navigation";
import "./post.css";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = postsMap.get(slug);
  if (!post) {
    return notFound();
  }
  const compiled = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(post.source);
  return <main dangerouslySetInnerHTML={{ __html: compiled.toString() }} />;
}

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}
