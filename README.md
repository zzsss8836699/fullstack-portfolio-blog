# Portfolio & Blog - Full Stack Project

A complete full-stack web application consisting of a RESTful API backend and a React frontend for managing and displaying portfolio projects and blog posts.

## Project Structure

```
stuck1/
├── backend/          # Node.js/Express API
│   ├── models/       # Mongoose models
│   ├── controllers/  # Route controllers
│   ├── routes/       # API routes
│   ├── middleware/   # Auth middleware
│   └── server.js     # Entry point
└── frontend/         # React application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── App.js
    └── public/
```

## Live URLs

- **Frontend**: [Deploy to Vercel](https://vercel.com) - React Application
- **Backend API**: [Deploy to Render](https://render.com) - Node.js/Express API
- **Database**: MongoDB Atlas (已配置 / Already configured)

### 本地开发 URLs / Local Development URLs
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## Features

### Backend API
- RESTful API with Express.js
- MongoDB Atlas database with Mongoose
- JWT authentication and authorization
- Password hashing with bcrypt
- Protected routes with middleware
- Full CRUD operations for Projects and Blog Posts
- Comment system for blog posts
- Contact form message handling

### Frontend
- React with React Router
- Context API for global state management
- Responsive design with Tailwind CSS
- HarmonyOS-inspired UI with green and pink color scheme
- Protected admin dashboard
- Real-time API integration

## 🚀 Quick Start

### 重要提示 / Important Note

如果您在安装依赖时遇到权限错误，请先运行：
If you encounter permission errors when installing dependencies, run first:

```bash
sudo chown -R $(whoami) ~/.npm
```

详细的安装和配置说明请查看：**[完整安装指南 SETUP_GUIDE.md](./SETUP_GUIDE.md)**
For detailed setup and configuration instructions, see: **[Complete Setup Guide SETUP_GUIDE.md](./SETUP_GUIDE.md)**

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy and configure `.env` file:
   ```bash
   cp .env.example .env
   # Edit .env and add your MongoDB URI and JWT secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy and configure `.env` file:
   ```bash
   cp .env.example .env
   # Default config points to http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open browser to http://localhost:3000

## API Endpoints

完整的 API 文档请查看 [backend/README.md](./backend/README.md)
For complete API documentation, see [backend/README.md](./backend/README.md)

### Quick Reference / 快速参考

**Authentication / 认证**
- `POST /api/users/register` - 注册用户 / Register user
- `POST /api/users/login` - 登录 / Login

**Projects / 项目**
- `GET /api/projects` - 获取所有项目 (公开) / Get all projects (public)
- `POST /api/projects` - 创建项目 (需登录) / Create project (auth required)
- `PUT /api/projects/:id` - 更新项目 (需登录) / Update project (auth required)
- `DELETE /api/projects/:id` - 删除项目 (需登录) / Delete project (auth required)

**Blog / 博客**
- `GET /api/blog` - 获取所有文章 (公开) / Get all posts (public)
- `GET /api/blog/:id` - 获取文章详情 (公开) / Get post details (public)
- `POST /api/blog` - 创建文章 (需登录) / Create post (auth required)
- `PUT /api/blog/:id` - 更新文章 (需授权) / Update post (authorized)
- `DELETE /api/blog/:id` - 删除文章 (需授权) / Delete post (authorized)

**Comments / 评论**
- `GET /api/blog/:postId/comments` - 获取评论 (公开) / Get comments (public)
- `POST /api/blog/:postId/comments` - 添加评论 (需登录) / Add comment (auth required)

**Contact / 联系**
- `POST /api/contact` - 发送消息 (公开) / Send message (public)

## Deployment

### Backend Deployment (Render/Heroku)

1. Push code to GitHub
2. Connect repository to Render/Heroku
3. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
4. Deploy

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder or connect via Git
3. Set environment variable:
   - `REACT_APP_API_URL` (your deployed backend URL)

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Helmet
- CORS
- dotenv

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Axios
- Context API

## License

This project is created for educational purposes.

