import Date from "../../../../components/date";
import { getPostData } from "../../../../lib/posts";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPostData(id);
  return (
    <article className="p-8">
      <h1 className="text-3xl">{postData.title}</h1>
      <div className="text-gray-500">
        <Date dateString={postData.date} />
      </div>
      <div
        className="blog-content mt-5"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
