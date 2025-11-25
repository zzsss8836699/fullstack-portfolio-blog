# 🚀 Vercel 部署指南 / Vercel Deployment Guide

## 方法 1: 通过 Vercel 网站部署 (推荐) / Deploy via Vercel Website (Recommended)

这是最简单和最可靠的方法！
This is the easiest and most reliable method!

### 步骤 1: 确保代码已推送到 GitHub

```bash
cd /Users/zishen/Desktop/stuck1
git add .
git commit -m "Add Vercel configuration"
git push
```

如果遇到网络问题，请稍后重试。
If you encounter network issues, please retry later.

### 步骤 2: 访问 Vercel 并导入项目

1. 打开浏览器访问: **https://vercel.com**
2. 点击右上角 **"Sign Up"** 或 **"Log In"**
3. 使用 GitHub 账号登录
4. 登录后，点击 **"Add New..."** → **"Project"**
5. 在项目列表中找到 **"fullstack-portfolio-blog"**
6. 点击 **"Import"**

### 步骤 3: 配置项目设置

在配置页面设置以下选项：

**Framework Preset:**
- 选择 `Create React App`

**Root Directory:**
- 点击 "Edit" 按钮
- 输入: `frontend`
- 点击 "Continue"

**Build and Output Settings:**
- Build Command: `npm run build` (自动填充)
- Output Directory: `build` (自动填充)
- Install Command: `npm install` (自动填充)

### 步骤 4: 配置环境变量

⚠️ **重要！在部署前端之前，您需要先部署后端！**

1. 点击 **"Environment Variables"** 部分
2. 添加变量：
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `http://localhost:5000/api` (临时使用本地)
   - 点击 "Add"

**注意**: 部署后端后，您需要更新这个值为实际的后端 URL。

### 步骤 5: 开始部署

1. 确认所有设置正确
2. 点击 **"Deploy"** 按钮
3. 等待构建完成（约 1-2 分钟）
4. 部署成功后，您会看到庆祝动画！🎉

### 步骤 6: 获取部署 URL

部署完成后，您会看到：
- **Domain**: 例如 `https://your-project-name-xxxx.vercel.app`
- 复制这个 URL

---

## 方法 2: 使用 Vercel CLI 部署 / Deploy Using Vercel CLI

### 前提条件
- Vercel CLI 已安装 ✅
- 已登录 Vercel 账号

### 步骤 1: 登录 Vercel

```bash
vercel login
```

按照提示完成登录。

### 步骤 2: 部署前端

```bash
cd /Users/zishen/Desktop/stuck1/frontend
vercel
```

按照交互式提示：
1. **Set up and deploy?** → 选择 `Y`
2. **Which scope?** → 选择您的账号
3. **Link to existing project?** → 选择 `N`
4. **What's your project's name?** → 输入 `portfolio-blog-frontend`
5. **In which directory is your code located?** → 按回车（使用当前目录）
6. **Want to override the settings?** → 选择 `N`

等待部署完成！

### 步骤 3: 部署到生产环境

```bash
vercel --prod
```

---

## 🔧 部署后端到 Render (必需)

在部署前端之前或之后，您需要部署后端！

### 步骤 1: 访问 Render

1. 打开浏览器访问: **https://render.com**
2. 使用 GitHub 账号注册/登录

### 步骤 2: 创建 Web Service

1. 点击 **"New +"** → **"Web Service"**
2. 连接您的 GitHub 账号（如果还没有）
3. 找到并选择 **"fullstack-portfolio-blog"** 仓库
4. 点击 **"Connect"**

### 步骤 3: 配置服务

填写以下信息：

**Basic Settings:**
- **Name**: `portfolio-blog-api` (或您喜欢的名称)
- **Region**: 选择离您最近的区域
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type:**
- 选择 **"Free"**

### 步骤 4: 添加环境变量

点击 **"Advanced"** 按钮，然后添加环境变量：

```
MONGODB_URI=mongodb+srv://o1uzpxtk_db_user:WCGvlES8jtK7z2JH@cluster0.4khdnbf.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345_make_it_long_and_secure

NODE_ENV=production
```

⚠️ **安全提示**:
- 为生产环境生成一个新的强密钥作为 JWT_SECRET！
- 至少 32 个字符，包含大小写字母、数字和特殊字符

### 步骤 5: 创建并部署

1. 点击 **"Create Web Service"**
2. 等待部署完成（约 3-5 分钟）
3. 部署成功后，复制您的后端 URL
   - 例如: `https://portfolio-blog-api-xxxx.onrender.com`

### 步骤 6: 测试后端

在浏览器访问：
```
https://your-backend-url.onrender.com/api/health
```

应该看到：
```json
{"status":"OK","message":"API is running"}
```

---

## 🔄 更新前端环境变量

后端部署完成后，您需要更新前端的 API URL：

### 在 Vercel 网站上更新

1. 登录 Vercel: https://vercel.com
2. 进入您的项目
3. 点击 **"Settings"** 标签
4. 点击左侧的 **"Environment Variables"**
5. 找到 `REACT_APP_API_URL`
6. 点击 **"Edit"**
7. 更新值为您的后端 URL + `/api`:
   ```
   https://portfolio-blog-api-xxxx.onrender.com/api
   ```
8. 点击 **"Save"**
9. 点击 **"Deployments"** 标签
10. 点击最新部署旁的三个点 **"..."**
11. 选择 **"Redeploy"**

### 使用 Vercel CLI 更新

```bash
cd /Users/zishen/Desktop/stuck1/frontend
vercel env add REACT_APP_API_URL production
# 输入值: https://your-backend-url.onrender.com/api

# 重新部署
vercel --prod
```

---

## 🔧 更新后端 CORS 设置

部署完成后，更新后端的 CORS 配置以允许您的 Vercel 域名。

### 选项 1: 在 Render 添加环境变量

1. 在 Render 的 Dashboard 中打开您的 Web Service
2. 点击 **"Environment"** 标签
3. 添加新的环境变量：
   ```
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
4. 保存后会自动重新部署

然后更新代码以使用这个变量。

### 选项 2: 直接修改代码

编辑 `backend/server.js`，找到 CORS 配置并更新：

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-frontend-name.vercel.app'  // 添加您的 Vercel URL
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
```

然后提交并推送到 GitHub：
```bash
git add backend/server.js
git commit -m "Update CORS for Vercel deployment"
git push
```

Render 会自动重新部署。

---

## ✅ 验证部署

### 测试前端

访问您的 Vercel URL: `https://your-frontend.vercel.app`

检查：
- ✅ 首页加载
- ✅ 项目页面显示数据
- ✅ 博客页面显示数据
- ✅ 可以注册和登录
- ✅ 管理面板可访问
- ✅ 可以创建/编辑/删除项目和博客

### 测试后端

访问您的 Render URL: `https://your-backend.onrender.com/api/health`

应该返回：
```json
{"status":"OK","message":"API is running"}
```

---

## 🎉 完成！

恭喜！您的全栈应用已成功部署！

### 您的部署 URL

**前端**: `https://your-project.vercel.app`
**后端**: `https://your-backend.onrender.com`

### 自动部署

两个平台都已配置自动部署：
- 每次推送到 GitHub 的 main 分支
- Render 和 Vercel 都会自动重新部署

### 提交作业

现在您可以提交：
1. **GitHub 仓库**: https://github.com/zzsss8836699/fullstack-portfolio-blog
2. **前端 URL**: 您的 Vercel URL
3. **后端 URL**: 您的 Render URL

---

## 🐛 常见问题

### 问题: 前端显示 "Network Error"

**解决方案:**
1. 检查后端是否正在运行
2. 验证前端的 `REACT_APP_API_URL` 是否正确
3. 检查后端 CORS 配置是否包含您的 Vercel 域名

### 问题: Render 后端睡眠/冷启动

**说明:**
- Render 免费计划在15分钟不活动后会睡眠
- 首次请求可能需要 30-60 秒唤醒

**解决方案:**
- 使用 UptimeRobot (https://uptimerobot.com) 每 5 分钟 ping 一次您的 API
- 或接受首次加载较慢

### 问题: 环境变量未生效

**解决方案:**
1. 确保环境变量名称正确（区分大小写）
2. 在 Vercel: 变量必须以 `REACT_APP_` 开头
3. 修改环境变量后需要重新部署

---

**需要帮助？查看 DEPLOYMENT_GUIDE.md 获取更多详细信息！**
