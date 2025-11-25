import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-harmony-primary mb-6">
          欢迎来到我的作品集
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          我是一名全栈开发者，专注于创建美观且功能强大的Web应用程序。
          在这里，您可以查看我的项目、阅读我的博客文章，并与我取得联系。
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="bg-harmony-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-harmony-green-700 transition-all transform hover:scale-105 shadow-lg"
          >
            查看项目
          </Link>
          <Link
            to="/blog"
            className="bg-harmony-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-harmony-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            阅读博客
          </Link>
          <Link
            to="/contact"
            className="bg-white text-harmony-primary border-2 border-harmony-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-harmony-green-50 transition-all transform hover:scale-105 shadow-lg"
          >
            联系我
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-harmony-primary mb-2">项目展示</h3>
            <p className="text-gray-600">浏览我的最新项目和作品集</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-harmony-secondary mb-2">技术博客</h3>
            <p className="text-gray-600">分享技术见解和学习心得</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-harmony-primary mb-2">保持联系</h3>
            <p className="text-gray-600">随时欢迎您的消息和反馈</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

