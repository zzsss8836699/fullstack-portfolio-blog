import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentAdded }) => {
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!body.trim()) {
      setError('评论内容不能为空');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.post(`${API_URL}/blog/${postId}/comments`, { body });
      setBody('');
      onCommentAdded();
    } catch (err) {
      setError(err.response?.data?.message || '发表评论失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="写下您的评论..."
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary resize-none"
      />
      {error && <p className="text-harmony-secondary text-sm mt-2">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-3 bg-harmony-primary text-white px-6 py-2 rounded-lg hover:bg-harmony-green-700 transition-colors disabled:opacity-50"
      >
        {loading ? '发表中...' : '发表评论'}
      </button>
    </form>
  );
};

export default CommentForm;

