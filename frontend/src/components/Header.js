import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-harmony-primary hover:text-harmony-green-700 transition-colors">
            Portfolio
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-harmony-primary transition-colors">
              首页
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-harmony-primary transition-colors">
              项目
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-harmony-primary transition-colors">
              博客
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-harmony-primary transition-colors">
              联系
            </Link>
            
            {token ? (
              <>
                <Link
                  to="/admin"
                  className="bg-harmony-primary text-white px-4 py-2 rounded-lg hover:bg-harmony-green-700 transition-colors"
                >
                  管理面板
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-harmony-secondary text-white px-4 py-2 rounded-lg hover:bg-harmony-pink-600 transition-colors"
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-harmony-primary transition-colors"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="bg-harmony-primary text-white px-4 py-2 rounded-lg hover:bg-harmony-green-700 transition-colors"
                >
                  注册
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

