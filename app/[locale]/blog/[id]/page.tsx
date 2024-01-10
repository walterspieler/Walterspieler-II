import { Metadata } from "next";

import { getCurrentLocale } from "lib/locales/server";

import Date from "../../../../components/date";
import { getPostData } from "../../../../lib/posts";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const locale = getCurrentLocale();
  const postData = await getPostData(id, locale);
  return {
    title: `${postData.title} | Matthieu Walterspieler`,
    description: `${postData.chapo}`,
  };
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const locale = getCurrentLocale();
  const postData = await getPostData(id, locale);
  return (
    <article className="p-8">
      <h1 className="text-3xl">{postData.title}</h1>
      <div className="text-gray-500">
        <Date dateString={postData.date} />
      </div>
      <div
        className="blog-content mt-5"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml as string }}
      />
    </article>
  );
}
