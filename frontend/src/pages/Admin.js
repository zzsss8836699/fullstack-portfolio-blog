import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    repoUrl: '',
    liveUrl: ''
  });
  const [postForm, setPostForm] = useState({
    title: '',
    content: ''
  });
  const [editingProject, setEditingProject] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [projectsRes, postsRes] = await Promise.all([
        axios.get(`${API_URL}/projects`),
        axios.get(`${API_URL}/blog`)
      ]);
      setProjects(projectsRes.data.data || []);
      setPosts(postsRes.data.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Project handlers
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (editingProject) {
        await axios.put(`${API_URL}/projects/${editingProject._id}`, projectForm);
      } else {
        await axios.post(`${API_URL}/projects`, projectForm);
      }
      setProjectForm({ title: '', description: '', imageUrl: '', repoUrl: '', liveUrl: '' });
      setEditingProject(null);
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    } finally {
      setFormLoading(false);
    }
  };

  const handleProjectEdit = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl || '',
      repoUrl: project.repoUrl || '',
      liveUrl: project.liveUrl || ''
    });
  };

  const handleProjectDelete = async (id) => {
    if (!window.confirm('确定要删除这个项目吗？')) return;
    try {
      await axios.delete(`${API_URL}/projects/${id}`);
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || '删除失败');
    }
  };

  // Post handlers
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (editingPost) {
        await axios.put(`${API_URL}/blog/${editingPost._id}`, postForm);
      } else {
        await axios.post(`${API_URL}/blog`, postForm);
      }
      setPostForm({ title: '', content: '' });
      setEditingPost(null);
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    } finally {
      setFormLoading(false);
    }
  };

  const handlePostEdit = (post) => {
    setEditingPost(post);
    setPostForm({
      title: post.title,
      content: post.content
    });
  };

  const handlePostDelete = async (id) => {
    if (!window.confirm('确定要删除这篇文章吗？')) return;
    try {
      await axios.delete(`${API_URL}/blog/${id}`);
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || '删除失败');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-harmony-primary text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-harmony-primary mb-8 text-center">管理面板</h1>

      {error && (
        <div className="mb-6 p-4 bg-harmony-pink-50 border border-harmony-secondary rounded-lg text-harmony-secondary">
          {error}
        </div>
      )}

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 rounded-l-lg font-semibold transition-colors ${
            activeTab === 'projects'
              ? 'bg-harmony-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          项目管理
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-6 py-3 rounded-r-lg font-semibold transition-colors ${
            activeTab === 'blog'
              ? 'bg-harmony-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          博客管理
        </button>
      </div>

      {activeTab === 'projects' && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-harmony-primary mb-4">
              {editingProject ? '编辑项目' : '创建新项目'}
            </h2>
            <form onSubmit={handleProjectSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">标题</label>
                <input
                  type="text"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">描述</label>
                <textarea
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary resize-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">图片URL</label>
                <input
                  type="url"
                  value={projectForm.imageUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">仓库URL</label>
                <input
                  type="url"
                  value={projectForm.repoUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, repoUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">演示URL</label>
                <input
                  type="url"
                  value={projectForm.liveUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-1 bg-harmony-primary text-white px-4 py-2 rounded-lg hover:bg-harmony-green-700 transition-colors disabled:opacity-50"
                >
                  {formLoading ? '保存中...' : editingProject ? '更新' : '创建'}
                </button>
                {editingProject && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProject(null);
                      setProjectForm({ title: '', description: '', imageUrl: '', repoUrl: '', liveUrl: '' });
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    取消
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-harmony-primary mb-4">项目列表</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {projects.map((project) => (
                <div key={project._id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-harmony-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProjectEdit(project)}
                      className="text-sm bg-harmony-primary text-white px-3 py-1 rounded hover:bg-harmony-green-700 transition-colors"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleProjectDelete(project._id)}
                      className="text-sm bg-harmony-secondary text-white px-3 py-1 rounded hover:bg-harmony-pink-600 transition-colors"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && (
                <p className="text-gray-600 text-center py-4">暂无项目</p>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'blog' && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-harmony-primary mb-4">
              {editingPost ? '编辑文章' : '创建新文章'}
            </h2>
            <form onSubmit={handlePostSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">标题</label>
                <input
                  type="text"
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">内容</label>
                <textarea
                  value={postForm.content}
                  onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                  required
                  rows="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-primary resize-none"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-1 bg-harmony-primary text-white px-4 py-2 rounded-lg hover:bg-harmony-green-700 transition-colors disabled:opacity-50"
                >
                  {formLoading ? '保存中...' : editingPost ? '更新' : '创建'}
                </button>
                {editingPost && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingPost(null);
                      setPostForm({ title: '', content: '' });
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    取消
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-harmony-primary mb-4">文章列表</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {posts.map((post) => (
                <div key={post._id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-harmony-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.content}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePostEdit(post)}
                      className="text-sm bg-harmony-primary text-white px-3 py-1 rounded hover:bg-harmony-green-700 transition-colors"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handlePostDelete(post._id)}
                      className="text-sm bg-harmony-secondary text-white px-3 py-1 rounded hover:bg-harmony-pink-600 transition-colors"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && (
                <p className="text-gray-600 text-center py-4">暂无文章</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

