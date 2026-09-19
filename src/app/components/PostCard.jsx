import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={post.image} alt="Shoes" width={500} height={200} />
      </figure>
      <div className="card-body flex flex-col gap-4">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <div className="card-actions ">
          <Link href={`posts/${post.id}`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
