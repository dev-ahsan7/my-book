import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { json } from 'node:stream/consumers';

const linkClass =
  'underline decoration-zinc-400 underline-offset-4 hover:decoration-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600';

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/blogs');

  const posts = await res.json();

  return posts.map((post) => ({ postId: post.id }));
};

const PostDetails = async ({ params }) => {
  const { postId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${postId}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch post data');
  }

  const post = await res.json();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <Link href="/posts" className={`text-sm ${linkClass}`}>
          Back to all posts
        </Link>

        {/* Header */}
        <header className="mt-10">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {post.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
          <p className="mt-6 text-sm text-zinc-500">
            By {post.author} · {formattedDate} · {post.readTime} read
          </p>
        </header>

        {/* Cover image */}
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          priority
          className="mt-10 h-auto w-full rounded-lg"
        />

        {/* Content */}
        <article className="mt-10 whitespace-pre-line text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {post.content}
        </article>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-2 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-zinc-300 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default PostDetails;
