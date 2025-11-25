import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import CommentForm from '../components/CommentForm';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/blog/${id}`);
      setPost(response.data.data);
      setComments(response.data.data.comments || []);
      setError(null);
    } catch (err) {
      setError('Failed to load blog post');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_URL}/blog/${id}/comments`);
      setComments(response.data.data || []);
    } catch (err) {
      console.error('Failed to load comments:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-harmony-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-harmony-secondary text-xl">
          {error || 'Post not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <button
        onClick={() => navigate('/blog')}
        className="mb-6 text-harmony-primary hover:text-harmony-green-700 transition-colors"
      >
        ← 返回博客列表
      </button>

      <article className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold text-harmony-primary mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">作者: {post.author?.username || 'Unknown'}</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>
        <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
          {post.content}
        </div>
      </article>

      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-harmony-primary mb-6">
          评论 ({comments.length})
        </h2>

        {token && (
          <CommentForm postId={id} onCommentAdded={fetchComments} />
        )}

        {!token && (
          <div className="mb-6 p-4 bg-harmony-green-50 rounded-lg text-center">
            <p className="text-gray-700">
              请 <a href="/login" className="text-harmony-primary hover:underline">登录</a> 后发表评论
            </p>
          </div>
        )}

        <div className="space-y-4 mt-6">
          {comments.length === 0 ? (
            <p className="text-gray-600 text-center py-4">暂无评论</p>
          ) : (
            comments.map((comment) => (
              <div key={comment._id} className="border-l-4 border-harmony-primary pl-4 py-2">
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-harmony-primary mr-2">
                    {comment.author?.username || 'Unknown'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="text-gray-700">{comment.body}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

