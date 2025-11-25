# 快速启动指南

## 项目概述

这是一个完整的全栈项目，包含：
1. **后端 API** (Node.js + Express + MongoDB)
2. **前端应用** (React + Tailwind CSS)

## 第一步：设置后端

### 1. 进入后端目录
```bash
cd backend
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量

创建 `.env` 文件（复制 `.env.example` 并填写）：
```env
PORT=5000
MONGODB_URI=你的MongoDB Atlas连接字符串
JWT_SECRET=你的JWT密钥（任意长字符串）
NODE_ENV=development
```

**获取 MongoDB Atlas 连接字符串：**
1. 访问 https://www.mongodb.com/cloud/atlas
2. 创建免费集群
3. 创建数据库用户
4. 获取连接字符串
5. 替换 `<password>` 为你的密码

### 4. 启动后端服务器
```bash
npm start
# 或开发模式（自动重启）
npm run dev
```

服务器将在 http://localhost:5000 运行

## 第二步：设置前端

### 1. 打开新终端，进入前端目录
```bash
cd frontend
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量（可选）

创建 `.env` 文件：
```env
REACT_APP_API_URL=http://localhost:5000/api
```

如果后端运行在 localhost:5000，可以省略此步骤。

### 4. 启动前端开发服务器
```bash
npm start
```

前端将在 http://localhost:3000 运行

## 测试应用

### 1. 注册用户
- 访问 http://localhost:3000/register
- 创建管理员账户

### 2. 登录
- 访问 http://localhost:3000/login
- 使用刚创建的账户登录

### 3. 管理内容
- 登录后访问 http://localhost:3000/admin
- 创建项目和博客文章

### 4. 浏览内容
- 访问 http://localhost:3000/projects 查看项目
- 访问 http://localhost:3000/blog 查看博客

## 部署

### 后端部署（Render/Heroku）

1. **准备代码**
   - 确保所有代码已提交到 GitHub

2. **在 Render 部署**
   - 创建新的 Web Service
   - 连接 GitHub 仓库
   - 设置环境变量：
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `NODE_ENV=production`
   - 构建命令：`npm install`
   - 启动命令：`npm start`

3. **获取后端 URL**
   - 例如：`https://your-api.onrender.com`

### 前端部署（Vercel/Netlify）

1. **构建项目**
   ```bash
   cd frontend
   npm run build
   ```

2. **在 Vercel 部署**
   - 连接 GitHub 仓库
   - 设置环境变量：
     - `REACT_APP_API_URL=你的后端URL/api`
   - 自动部署

3. **在 Netlify 部署**
   - 拖拽 `frontend/build` 文件夹
   - 或连接 GitHub 仓库
   - 设置环境变量同上

## API 测试

使用 Postman 或 Thunder Client 测试 API：

### 注册用户
```
POST http://localhost:5000/api/users/register
Body (JSON):
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "password123"
}
```

### 登录
```
POST http://localhost:5000/api/users/login
Body (JSON):
{
  "email": "admin@example.com",
  "password": "password123"
}
```

### 创建项目（需要登录）
```
POST http://localhost:5000/api/projects
Headers:
  Authorization: Bearer <你的JWT token>
Body (JSON):
{
  "title": "我的项目",
  "description": "项目描述",
  "imageUrl": "https://example.com/image.jpg",
  "repoUrl": "https://github.com/...",
  "liveUrl": "https://example.com"
}
```

## 常见问题

### 后端无法连接 MongoDB
- 检查 MongoDB Atlas 连接字符串
- 确保 IP 地址已添加到白名单（0.0.0.0/0 允许所有）
- 检查用户名和密码是否正确

### 前端无法连接后端
- 检查后端是否运行
- 检查 `REACT_APP_API_URL` 环境变量
- 检查 CORS 配置

### 登录后无法访问管理面板
- 检查 JWT token 是否正确存储
- 检查浏览器控制台错误
- 确保后端 protect 中间件正常工作

## 项目结构

```
stuck1/
├── backend/
│   ├── models/          # 数据模型
│   ├── controllers/     # 控制器
│   ├── routes/          # 路由
│   ├── middleware/      # 中间件
│   ├── server.js        # 服务器入口
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # 组件
│   │   ├── pages/       # 页面
│   │   ├── context/     # 上下文
│   │   └── App.js
│   └── package.json
└── README.md
```

## 设计说明

UI 采用鸿蒙设计风格，配色方案：
- **主色（绿色）**: #36965c
- **辅色（粉色）**: #f87171
- 现代化、简洁的界面
- 响应式设计，适配所有设备

## 需要帮助？

查看详细文档：
- 后端 API 文档：`backend/README.md`
- 前端文档：`frontend/README.md`
- 主 README：`README.md`

