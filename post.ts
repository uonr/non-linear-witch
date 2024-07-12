import fs from "node:fs";
const postsPath = "./posts";

interface Post {
  slug: string;
  source: string;
}

export const posts: Post[] = fs
  .readdirSync(postsPath)
  .filter((file) => file.endsWith(".md"))
  .map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const source = fs.readFileSync(`${postsPath}/${filename}`, "utf-8");
    return { slug, source };
  });
export const postsMap = new Map(posts.map((post) => [post.slug, post]));
