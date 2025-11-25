# 完整安装与运行指南 / Complete Setup Guide

这是一个完整的全栈作品集和博客应用程序，包含 Node.js/Express 后端和 React 前端，采用鸿蒙设计风格（绿色和粉红色主题）。

This is a complete full-stack portfolio and blog application with a Node.js/Express backend and React frontend, featuring HarmonyOS design style with green and pink colors.

---

## 📋 前提条件 / Prerequisites

在开始之前，请确保您的系统已安装：
Before starting, ensure you have installed:

- **Node.js** (v14 或更高版本 / v14 or higher) - [下载 Download](https://nodejs.org/)
- **npm** (通常随 Node.js 一起安装 / usually comes with Node.js)
- **Git** (可选，用于版本控制 / optional, for version control)
- **MongoDB Atlas** 账户 (免费 / account (free)) - [注册 Sign up](https://www.mongodb.com/cloud/atlas/register)

---

## 🚀 快速开始 / Quick Start

### 步骤 1: 修复 npm 权限问题 (如果需要) / Step 1: Fix npm Permissions (If Needed)

如果您在安装依赖时遇到权限错误，请运行：
If you encounter permission errors when installing dependencies, run:

```bash
sudo chown -R $(whoami) ~/.npm
```

或者 / Or:

```bash
sudo chown -R 501:20 ~/.npm
```

### 步骤 2: 安装后端依赖 / Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### 步骤 3: 配置后端环境变量 / Step 3: Configure Backend Environment

1. 复制示例文件：/ Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. 编辑 `.env` 文件并填入您的配置：/ Edit `.env` file and fill in your configuration:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

#### 如何获取 MongoDB 连接字符串 / How to Get MongoDB Connection String:

1. 登录 [MongoDB Atlas](https://cloud.mongodb.com/)
2. 创建新集群 (免费) / Create a new cluster (free tier)
3. 点击 "Connect" → "Connect your application" / Click "Connect" → "Connect your application"
4. 复制连接字符串 / Copy the connection string
5. 将 `<password>` 替换为您的数据库用户密码 / Replace `<password>` with your database user password

### 步骤 4: 安装前端依赖 / Step 4: Install Frontend Dependencies

```bash
cd frontend
npm install
```

**注意 / Note**: 如果遇到权限错误，请先执行步骤 1 / If you encounter permission errors, run Step 1 first.

### 步骤 5: 配置前端环境变量 / Step 5: Configure Frontend Environment

1. 复制示例文件：/ Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. 默认配置已经正确，指向本地后端：/ Default configuration is already correct, pointing to local backend:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

### 步骤 6: 启动应用 / Step 6: Start the Application

**打开两个终端窗口 / Open two terminal windows:**

**终端 1 - 启动后端 / Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```

您应该看到：/ You should see:
```
Connected to MongoDB
Server running on port 5000
```

**终端 2 - 启动前端 / Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

浏览器将自动打开 `http://localhost:3000`
Browser will automatically open `http://localhost:3000`

---

## 🎨 功能特性 / Features

### ✅ 后端 API / Backend API

- ✅ 用户认证 (注册/登录) / User Authentication (Register/Login)
- ✅ JWT 令牌验证 / JWT Token Validation
- ✅ 项目 CRUD 操作 / Project CRUD Operations
- ✅ 博客文章 CRUD 操作 / Blog Post CRUD Operations
- ✅ 评论系统 / Comment System
- ✅ 联系表单 / Contact Form
- ✅ 密码哈希 (bcrypt) / Password Hashing (bcrypt)
- ✅ 安全中间件 (Helmet) / Security Middleware (Helmet)
- ✅ CORS 支持 / CORS Support

### ✅ 前端应用 / Frontend Application

- ✅ React 18 with Hooks
- ✅ React Router 路由 / React Router Routing
- ✅ Context API 全局状态管理 / Context API Global State Management
- ✅ JWT 认证流程 / JWT Authentication Flow
- ✅ 受保护的管理员面板 / Protected Admin Dashboard
- ✅ 项目展示页面 / Projects Gallery Page
- ✅ 博客列表和详情页 / Blog List and Detail Pages
- ✅ 评论功能 / Comment Feature
- ✅ 联系表单 / Contact Form
- ✅ 响应式设计 / Responsive Design
- ✅ 鸿蒙设计风格 (绿色+粉红色) / HarmonyOS Design Style (Green + Pink)
- ✅ Tailwind CSS 样式 / Tailwind CSS Styling

---

## 📁 项目结构 / Project Structure

```
stuck1/
├── backend/                 # Node.js/Express API
│   ├── controllers/        # 路由控制器 / Route controllers
│   ├── models/             # Mongoose 模型 / Mongoose models
│   ├── routes/             # API 路由 / API routes
│   ├── middleware/         # 认证中间件 / Auth middleware
│   ├── server.js           # 入口文件 / Entry point
│   ├── package.json        # 依赖配置 / Dependencies
│   ├── .env                # 环境变量 / Environment variables
│   └── README.md           # API 文档 / API documentation
│
├── frontend/               # React 应用 / React Application
│   ├── public/            # 静态文件 / Static files
│   ├── src/
│   │   ├── components/    # React 组件 / React components
│   │   ├── pages/         # 页面组件 / Page components
│   │   ├── context/       # Context API
│   │   ├── App.js         # 主应用 / Main app
│   │   └── index.js       # 入口 / Entry point
│   ├── tailwind.config.js # Tailwind 配置 / Tailwind config
│   ├── package.json       # 依赖配置 / Dependencies
│   └── .env               # 环境变量 / Environment variables
│
├── README.md              # 项目说明 / Project overview
└── SETUP_GUIDE.md         # 本文件 / This file
```

---

## 🔐 创建第一个管理员账户 / Creating Your First Admin Account

1. 确保后端和前端都在运行 / Ensure both backend and frontend are running
2. 在浏览器中访问 / Visit in browser: `http://localhost:3000/register`
3. 填写注册表单：/ Fill in the registration form:
   - 用户名 / Username: `admin` (or your choice)
   - 邮箱 / Email: `admin@example.com`
   - 密码 / Password: (至少 6 个字符 / at least 6 characters)
4. 注册成功后会自动登录并跳转到管理面板 / After successful registration, you'll be automatically logged in and redirected to the admin dashboard

---

## 🎯 使用管理面板 / Using the Admin Dashboard

登录后，访问 / After logging in, visit: `http://localhost:3000/admin`

### 管理项目 / Managing Projects

1. 点击 "项目管理" 标签 / Click "项目管理" tab
2. 填写项目表单：/ Fill in the project form:
   - 标题 / Title (必填 / required)
   - 描述 / Description (必填 / required)
   - 图片 URL / Image URL (可选 / optional)
   - 仓库 URL / Repository URL (可选 / optional)
   - 演示 URL / Live URL (可选 / optional)
3. 点击 "创建" / Click "创建" to create
4. 使用 "编辑" 和 "删除" 按钮管理现有项目 / Use "编辑" and "删除" buttons to manage existing projects

### 管理博客 / Managing Blog Posts

1. 点击 "博客管理" 标签 / Click "博客管理" tab
2. 填写博客表单：/ Fill in the blog form:
   - 标题 / Title (必填 / required)
   - 内容 / Content (必填 / required)
3. 点击 "创建" / Click "创建" to create
4. 使用 "编辑" 和 "删除" 按钮管理现有文章 / Use "编辑" and "删除" buttons to manage existing posts

---

## 🌐 API 端点 / API Endpoints

完整的 API 文档请查看：/ For complete API documentation, see:
[backend/README.md](./backend/README.md)

**主要端点 / Main Endpoints:**

- `POST /api/users/register` - 用户注册 / User Registration
- `POST /api/users/login` - 用户登录 / User Login
- `GET /api/projects` - 获取所有项目 / Get All Projects
- `POST /api/projects` - 创建项目 (需要认证) / Create Project (Auth Required)
- `GET /api/blog` - 获取所有博客 / Get All Blog Posts
- `POST /api/blog` - 创建博客 (需要认证) / Create Blog Post (Auth Required)
- `POST /api/blog/:postId/comments` - 添加评论 (需要认证) / Add Comment (Auth Required)
- `POST /api/contact` - 发送联系消息 / Send Contact Message

---

## 🚢 部署到生产环境 / Deploying to Production

### 部署后端到 Render / Deploy Backend to Render

1. 访问 / Visit [https://render.com](https://render.com)
2. 创建新的 Web Service / Create a New Web Service
3. 连接您的 GitHub 仓库 / Connect your GitHub repository
4. 配置：/ Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `MONGODB_URI`: (您的 MongoDB Atlas 连接字符串 / Your MongoDB Atlas connection string)
     - `JWT_SECRET`: (生成一个强密钥 / Generate a strong secret)
     - `NODE_ENV`: `production`
5. 点击 "Create Web Service" / Click "Create Web Service"
6. 复制部署的 URL / Copy the deployed URL

### 部署前端到 Vercel / Deploy Frontend to Vercel

1. 访问 / Visit [https://vercel.com](https://vercel.com)
2. 导入 Git 仓库 / Import Git Repository
3. 配置：/ Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Environment Variables**:
     - `REACT_APP_API_URL`: (您的 Render 后端 URL + /api / Your Render backend URL + /api)
4. 点击 "Deploy" / Click "Deploy"
5. 等待构建完成 / Wait for build to complete

### 更新 CORS 设置 / Update CORS Settings

部署后，更新后端的 CORS 配置以允许您的前端域名：
After deployment, update backend CORS to allow your frontend domain:

在 `backend/server.js` 中：/ In `backend/server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-url.vercel.app'
}));
```

---

## 🐛 常见问题 / Troubleshooting

### 问题: npm 权限错误 / Issue: npm Permission Errors

**解决方案 / Solution:**
```bash
sudo chown -R $(whoami) ~/.npm
```

### 问题: 端口 5000 已被占用 / Issue: Port 5000 Already in Use

**解决方案 / Solution:**
更改 `.env` 文件中的端口：/ Change port in `.env` file:
```env
PORT=5001
```

### 问题: MongoDB 连接失败 / Issue: MongoDB Connection Failed

**解决方案 / Solution:**
1. 检查连接字符串是否正确 / Verify connection string is correct
2. 确保密码中的特殊字符已URL编码 / Ensure special characters in password are URL-encoded
3. 在 MongoDB Atlas 中将您的 IP 加入白名单 / Whitelist your IP in MongoDB Atlas
4. 检查网络连接 / Check network connection

### 问题: 前端无法连接后端 / Issue: Frontend Cannot Connect to Backend

**解决方案 / Solution:**
1. 确保后端正在运行 / Ensure backend is running
2. 检查 `frontend/.env` 中的 API URL / Check API URL in `frontend/.env`
3. 检查浏览器控制台的 CORS 错误 / Check browser console for CORS errors

---

## 📚 技术栈 / Tech Stack

### 后端 / Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Helmet (安全 / security)
- CORS

### 前端 / Frontend
- React 18
- React Router DOM
- Context API
- Axios
- Tailwind CSS
- HarmonyOS Design Colors

---

## 👥 作业要求对照 / Assignment Requirements Checklist

### ✅ 后端 (100分) / Backend (100 marks)

- ✅ **数据库与模型 (20分)** / Database & Models (20 marks)
  - ✅ User, Project, BlogPost, Comment, Message 模型 / models
  - ✅ 字段验证 / Field validation
  - ✅ MongoDB Atlas 连接 / MongoDB Atlas connection

- ✅ **认证与授权 (25分)** / Auth & Authorization (25 marks)
  - ✅ 用户注册 / User registration
  - ✅ 用户登录 / User login
  - ✅ 密码哈希 (bcrypt) / Password hashing (bcrypt)
  - ✅ JWT 生成 / JWT generation
  - ✅ protect 中间件 / protect middleware

- ✅ **CRUD 端点 (20分)** / CRUD Endpoints (20 marks)
  - ✅ 所有项目端点 / All project endpoints
  - ✅ 所有博客端点 / All blog endpoints
  - ✅ 授权逻辑 / Authorization logic

- ✅ **关系与功能 (15分)** / Relationships & Features (15 marks)
  - ✅ 评论端点 / Comment endpoints
  - ✅ 联系端点 / Contact endpoints
  - ✅ populate() 使用 / populate() usage

- ✅ **结构与错误处理 (10分)** / Structure & Error Handling (10 marks)
  - ✅ MVC 模式 / MVC pattern
  - ✅ 集中错误处理 / Central error handling

- ✅ **安全与部署 (10分)** / Security & Deployment (10 marks)
  - ✅ Helmet 安全头 / Helmet security headers
  - ✅ dotenv 环境变量 / dotenv environment variables
  - ✅ 部署配置文件 / Deployment configuration

### ✅ 前端 (100分) / Frontend (100 marks)

- ✅ **React 架构与设计 (20分)** / React Architecture & Design (20 marks)
  - ✅ 响应式设计 / Responsive design
  - ✅ 现代样式 (Tailwind CSS) / Modern styling (Tailwind CSS)
  - ✅ 组件化 / Component-based architecture
  - ✅ 鸿蒙设计风格 (绿色+粉红色) / HarmonyOS design (green + pink)

- ✅ **路由 (15分)** / Routing (15 marks)
  - ✅ 所有公共路由 / All public routes
  - ✅ 动态路由 / Dynamic routes
  - ✅ 受保护的 /admin 路由 / Protected /admin route

- ✅ **API 集成 - 公共 (20分)** / API Integration - Public (20 marks)
  - ✅ /projects 页面 / /projects page
  - ✅ /blog 页面 / /blog page
  - ✅ /blog/:id 页面 / /blog/:id page
  - ✅ 联系表单 / Contact form

- ✅ **认证流程与全局状态 (20分)** / Auth Flow & Global State (20 marks)
  - ✅ 登录/注册页面 / Login/Register pages
  - ✅ Auth Context / Auth Context
  - ✅ 认证感知导航 / Auth-aware navigation

- ✅ **API 集成 - 受保护 (20分)** / API Integration - Protected (20 marks)
  - ✅ 管理面板完整 CRUD / Admin Dashboard full CRUD
  - ✅ 项目管理 / Project management
  - ✅ 博客管理 / Blog management
  - ✅ 评论功能 / Comment feature

- ✅ **部署 (5分)** / Deployment (5 marks)
  - ✅ 部署配置准备就绪 / Deployment configuration ready
  - ✅ 前后端通信配置 / Frontend-backend communication configured

---

## 📝 许可证 / License

此项目仅用于教育目的。
This project is created for educational purposes only.

---

## 💡 提示 / Tips

1. **开发时保持两个终端运行** / Keep both terminals running during development
2. **经常保存和测试** / Save and test frequently
3. **使用浏览器开发者工具调试** / Use browser DevTools for debugging
4. **检查控制台错误** / Check console for errors
5. **在 MongoDB Atlas 中查看数据** / View data in MongoDB Atlas dashboard

---

## 🎓 学习资源 / Learning Resources

- [React 官方文档](https://react.dev/)
- [Express 文档](https://expressjs.com/)
- [MongoDB 文档](https://docs.mongodb.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [JWT 介绍](https://jwt.io/introduction)

---

**祝您编码愉快！/ Happy Coding! 🚀**

如有问题，请检查控制台输出或查看项目文档。
If you have any issues, check console output or refer to project documentation.
