import React from 'react';
import PostCard from '../components/PostCard';

const getPosts = async () => {
  const res = await fetch('http://localhost:5000/blogs', {
    next: { revalidate: 60 },
  });

  if (!res) {
    throw new Error('Failed to fetch Posts');
  }

  return res.json();
};

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="font-normal text-3xl">Post Page: {posts.length}</h2>

      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
