import Link from "next/link";

import Date from "components/date";
import { getSortedPostsData } from "lib/posts";

export default async function Posts() {
  const postData = await getSortedPostsData();
  return postData.map((post) => (
    <div className="border-b p-8" key={post.id}>
      <Link
        href={`/blog/${post.id}`}
        className="text-3xl transition-colors hover:text-matt-green"
      >
        {post.title}
      </Link>
      <p className="my-3">{post.chapo}</p>
      <div className="text-gray-500">
        <Date dateString={post.date} />
      </div>
    </div>
  ));
}
