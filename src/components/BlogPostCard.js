import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${post._id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 h-full">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-harmony-primary mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.content.substring(0, 150)}...
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>作者: {post.author?.username || 'Unknown'}</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;

