# 部署指南 / Deployment Guide

## 🚀 部署到生产环境 / Deploy to Production

本指南将帮助您将应用部署到免费的云平台。
This guide will help you deploy your application to free cloud platforms.

---

## 📋 部署前检查清单 / Pre-Deployment Checklist

- [ ] 后端本地测试通过 / Backend tested locally
- [ ] 前端本地测试通过 / Frontend tested locally
- [ ] 已创建 MongoDB Atlas 集群 / MongoDB Atlas cluster created
- [ ] 已准备 GitHub 仓库 / GitHub repository prepared
- [ ] 已测试所有 CRUD 操作 / All CRUD operations tested

---

## 🗄️ 步骤 1: 设置 MongoDB Atlas (免费)

### 1.1 创建集群 / Create Cluster

1. 访问 https://www.mongodb.com/cloud/atlas/register
2. 注册免费账户
3. 创建新集群 (选择 FREE tier - M0)
4. 选择云提供商和区域 (推荐 AWS + 离您最近的区域)
5. 等待集群创建完成 (约 3-5 分钟)

### 1.2 配置数据库访问 / Configure Database Access

1. 点击左侧菜单 "Database Access"
2. 点击 "Add New Database User"
3. 选择 "Password" 认证方式
4. 创建用户名和密码 (请记住这些信息！)
5. 设置权限为 "Read and write to any database"
6. 点击 "Add User"

### 1.3 配置网络访问 / Configure Network Access

1. 点击左侧菜单 "Network Access"
2. 点击 "Add IP Address"
3. 点击 "Allow Access from Anywhere" (0.0.0.0/0)
   - **注意**: 仅用于开发/学习。生产环境应该只允许特定 IP
4. 点击 "Confirm"

### 1.4 获取连接字符串 / Get Connection String

1. 回到 "Database" 页面
2. 点击集群的 "Connect" 按钮
3. 选择 "Connect your application"
4. 选择 Driver: "Node.js" 和 Version: "4.1 or later"
5. 复制连接字符串，格式类似：
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. 将 `<username>` 和 `<password>` 替换为您的数据库用户凭据
7. 在 `?retryWrites` 前添加数据库名称，例如：
   ```
   mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio_db?retryWrites=true&w=majority
   ```

---

## 🖥️ 步骤 2: 部署后端到 Render (免费)

### 2.1 准备 GitHub 仓库

1. 在 GitHub 创建新仓库
2. 将代码推送到 GitHub:
   ```bash
   cd /Users/zishen/Desktop/stuck1
   git init
   git add .
   git commit -m "Initial commit: Full-stack portfolio and blog"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### 2.2 在 Render 上创建 Web Service

1. 访问 https://render.com
2. 注册并登录
3. 点击 "New +" → "Web Service"
4. 连接您的 GitHub 仓库
5. 配置设置：
   - **Name**: `portfolio-api` (或您喜欢的名称)
   - **Region**: 选择离您最近的区域
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 2.3 设置环境变量

在 "Environment Variables" 部分，添加：

```
MONGODB_URI=mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio_db?retryWrites=true&w=majority
JWT_SECRET=YOUR_SUPER_SECRET_JWT_KEY_MIN_32_CHARS_12345678901234567890
NODE_ENV=production
```

**重要**:
- 使用您的真实 MongoDB 连接字符串
- 生成一个强密钥作为 JWT_SECRET (至少 32 个字符)

### 2.4 部署

1. 点击 "Create Web Service"
2. 等待部署完成 (约 2-3 分钟)
3. 复制您的后端 URL，例如：
   ```
   https://portfolio-api-xxxx.onrender.com
   ```

### 2.5 测试后端

在浏览器访问：
```
https://your-backend-url.onrender.com/api/health
```

应该看到：
```json
{"status":"OK","message":"API is running"}
```

---

## 🌐 步骤 3: 部署前端到 Vercel (免费)

### 3.1 在 Vercel 上导入项目

1. 访问 https://vercel.com
2. 注册并登录 (可以用 GitHub 账号)
3. 点击 "Add New..." → "Project"
4. 导入您的 GitHub 仓库
5. 配置设置：
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### 3.2 设置环境变量

点击 "Environment Variables" 并添加：

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

**重要**: 使用您在步骤 2.4 中获得的 Render 后端 URL

### 3.3 部署

1. 点击 "Deploy"
2. 等待构建和部署完成 (约 1-2 分钟)
3. 复制您的前端 URL，例如：
   ```
   https://your-portfolio-xxxx.vercel.app
   ```

### 3.4 测试前端

1. 在浏览器访问您的 Vercel URL
2. 测试所有页面：首页、项目、博客、联系
3. 注册新账户
4. 登录并访问管理面板
5. 测试 CRUD 操作

---

## 🔧 步骤 4: 更新 CORS 设置 (重要!)

部署后，您需要更新后端的 CORS 配置以允许您的 Vercel 域名。

### 方法 1: 在 Render 上直接编辑 (推荐)

在 Render 的环境变量中添加：

```
FRONTEND_URL=https://your-portfolio-xxxx.vercel.app
```

然后更新 `backend/server.js`:

```javascript
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins
}));
```

### 方法 2: 使用代码更新

编辑 `backend/server.js`，更新 CORS 配置：

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-portfolio-xxxx.vercel.app'
  ]
}));
```

提交更改并推送到 GitHub，Render 会自动重新部署。

---

## ✅ 部署验证清单 / Deployment Verification Checklist

### 后端验证 / Backend Verification

- [ ] 健康检查端点工作: `https://your-api.onrender.com/api/health`
- [ ] 可以获取项目: `https://your-api.onrender.com/api/projects`
- [ ] 可以获取博客: `https://your-api.onrender.com/api/blog`
- [ ] 用户注册工作
- [ ] 用户登录工作

### 前端验证 / Frontend Verification

- [ ] 首页加载正常
- [ ] 项目页面显示数据
- [ ] 博客页面显示数据
- [ ] 可以注册新用户
- [ ] 可以登录
- [ ] 管理面板可以访问
- [ ] 可以创建项目
- [ ] 可以创建博客文章
- [ ] 可以编辑和删除
- [ ] 可以发表评论
- [ ] 联系表单工作

---

## 🎯 提交作业 / Submitting Your Assignment

### 后端作业提交 / Backend Assignment Submission

提供以下信息：
Provide the following:

1. **Live API URL**: `https://your-api.onrender.com`
2. **Source Code**: `https://github.com/yourusername/your-repo`
3. **README**: 已包含在 `backend/README.md` / Included in `backend/README.md`

### 前端作业提交 / Frontend Assignment Submission

提供以下信息：
Provide the following:

1. **Live Frontend URL**: `https://your-portfolio.vercel.app`
2. **Live Backend URL**: `https://your-api.onrender.com`
3. **Source Code**: `https://github.com/yourusername/your-repo`
4. **README**: 已包含在项目根目录和 frontend/ 中 / Included in project root and frontend/

---

## 🔄 持续部署 / Continuous Deployment

两个平台都支持自动部署：
Both platforms support automatic deployment:

- **Render**: 每次推送到 main 分支时自动重新部署后端
- **Vercel**: 每次推送到 main 分支时自动重新部署前端

工作流程：
Workflow:
```bash
git add .
git commit -m "Update feature"
git push
# 自动触发部署 / Automatically triggers deployment
```

---

## ⚠️ 注意事项 / Important Notes

### 免费计划限制 / Free Tier Limitations

**Render:**
- 不活动 15 分钟后会休眠
- 首次请求可能需要 30-60 秒唤醒
- 建议使用 UptimeRobot 保持活跃

**Vercel:**
- 无休眠问题
- 优秀的性能和 CDN

**MongoDB Atlas:**
- 免费 512MB 存储
- 对于学习项目完全足够

### 安全建议 / Security Recommendations

1. ✅ 使用强 JWT 密钥 (已实现)
2. ✅ 密码哈希 (已实现 bcrypt)
3. ✅ Helmet 安全头 (已实现)
4. ✅ 输入验证 (已实现)
5. ⚠️ 生产环境中限制 CORS 到特定域名
6. ⚠️ 生产环境中限制 MongoDB 网络访问

---

## 🎉 完成！/ Congratulations!

您的全栈应用现在已经部署到生产环境！

Your full-stack application is now deployed to production!

🔗 **记得更新 README.md 中的部署 URL**
🔗 **Remember to update deployment URLs in README.md**

---

**需要帮助？/ Need Help?**

查看：
- SETUP_GUIDE.md - 安装和配置
- backend/README.md - API 文档
- PROJECT_COMPLETION_SUMMARY.md - 项目总结

或访问：
- [Render 文档](https://render.com/docs)
- [Vercel 文档](https://vercel.com/docs)
- [MongoDB Atlas 文档](https://docs.atlas.mongodb.com/)
