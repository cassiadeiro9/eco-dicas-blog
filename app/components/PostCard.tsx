import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p className="mt-2">{post.summary}</p>
    </div>
  );
}
