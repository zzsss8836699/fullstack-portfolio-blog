# Full-Stack Portfolio & Blog Application

A complete full-stack web application with separate backend API and frontend application, both deployed on Vercel.

---

## 📦 Repository Structure

This repository contains **TWO SEPARATE PROJECTS**:

```
fullstack-portfolio-blog/
├── backend/              # Backend API (Assignment 1)
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Route controllers
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── server.js        # Server entry point
│   └── README.md        # Backend documentation
│
├── frontend/            # Frontend Application (Assignment 2)
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Auth context
│   │   └── App.js       # Main app
│   └── README.md        # Frontend documentation
│
└── README.md            # This file
```

---

## 🎓 Assignment 1: Backend API

### Submission Information

**Live Backend API URL:**
```
https://portfolio-blog-47o1zr9pi-asdosadkkoas-projects.vercel.app
```

**Source Code Location:**
- Repository: https://github.com/zzsss8836699/fullstack-portfolio-blog
- Backend Code: `/backend` directory

**Documentation:**
- **README.md**: [backend/README.md](./backend/README.md)
- Contains: All API endpoints, purposes, Body/Params examples, Request/Response examples

### Quick Links
- API Health Check: https://portfolio-blog-47o1zr9pi-asdosadkkoas-projects.vercel.app/api/health
- API Documentation: [backend/README.md](./backend/README.md)

---

## 🎓 Assignment 2: Frontend Application

### Submission Information

**Live Frontend URL:**
```
https://portfolio-blog-frontend-ln7h5bpo5-asdosadkkoas-projects.vercel.app
```

**Source Code Location:**
- Repository: https://github.com/zzsss8836699/fullstack-portfolio-blog
- Frontend Code: `/frontend` directory

**Documentation:**
- **README.md**: [frontend/README.md](./frontend/README.md)
- Contains: All API routes, functionality, Body/Params, example requests, code samples

### Quick Links
- Live Application: https://portfolio-blog-frontend-ln7h5bpo5-asdosadkkoas-projects.vercel.app
- Frontend Documentation: [frontend/README.md](./frontend/README.md)

---

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm start
```

Server runs on http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with backend API URL
npm start
```

Application runs on http://localhost:3000

---

## 💻 Technologies

### Backend
- Node.js & Express.js
- MongoDB Atlas & Mongoose
- JWT Authentication
- bcryptjs, Helmet, CORS
- Deployed on Vercel

### Frontend
- React 18 & React Router DOM
- Tailwind CSS (HarmonyOS design)
- Axios & Context API
- Deployed on Vercel

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/users/register` | Register user | No |
| POST | `/api/users/login` | Login user | No |
| GET | `/api/projects` | Get all projects | No |
| POST | `/api/projects` | Create project | Yes |
| PUT | `/api/projects/:id` | Update project | Yes |
| DELETE | `/api/projects/:id` | Delete project | Yes |
| GET | `/api/blog` | Get all posts | No |
| POST | `/api/blog` | Create post | Yes |
| PUT | `/api/blog/:id` | Update post | Yes |
| DELETE | `/api/blog/:id` | Delete post | Yes |
| POST | `/api/blog/:postId/comments` | Add comment | Yes |
| POST | `/api/contact` | Send message | No |

**Total: 15 endpoints** (See [backend/README.md](./backend/README.md) for details)

---

## 🎨 Features

### Backend Features
- ✅ RESTful API design
- ✅ JWT authentication & authorization
- ✅ MongoDB Atlas integration
- ✅ Complete CRUD operations
- ✅ Password hashing with bcrypt
- ✅ Secure headers with Helmet
- ✅ Error handling middleware
- ✅ Protected routes

### Frontend Features
- ✅ User registration & login
- ✅ Protected admin dashboard
- ✅ Projects gallery (public)
- ✅ Blog with comments (public)
- ✅ Contact form (public)
- ✅ Responsive HarmonyOS design
- ✅ Loading & error states
- ✅ Context API state management

---

## 📚 Documentation

| Document | Purpose | Location |
|----------|---------|----------|
| **Backend README** | Complete API documentation | [backend/README.md](./backend/README.md) |
| **Frontend README** | Frontend routes & API calls | [frontend/README.md](./frontend/README.md) |
| **Main README** | Project overview | This file |

---

## 🎯 Submission Checklist

### Assignment 1 (Backend)
- [x] Live API URL provided
- [x] Source code in `/backend` directory
- [x] README.md with all endpoints, purposes, examples

### Assignment 2 (Frontend)
- [x] Live frontend URL provided
- [x] Source code in `/frontend` directory
- [x] README.md with all API routes, functionality, examples

---

## 📝 License

This project is created for educational purposes.

---

**Repository:** https://github.com/zzsss8836699/fullstack-portfolio-blog

**Live Demo:**
- Frontend: https://portfolio-blog-frontend-ln7h5bpo5-asdosadkkoas-projects.vercel.app
- Backend: https://portfolio-blog-47o1zr9pi-asdosadkkoas-projects.vercel.app
