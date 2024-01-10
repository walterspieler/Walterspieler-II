import { Metadata } from "next";
import Link from "next/link";

import Date from "components/date";
import { getCurrentLocale, getI18n } from "lib/locales/server";
import { getSortedPostsData } from "lib/posts";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t("GLOBAL.BLOG.TITLE"),
    description: t("GLOBAL.BLOG.DESCRIPTION"),
  };
}

export default async function Posts() {
  const locale = getCurrentLocale();
  const postData = await getSortedPostsData(locale);
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
