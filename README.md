# Portfolio & Blog - Frontend

A modern, responsive React application for showcasing portfolio projects and blog posts.

## 🌐 Live Deployment

### Live Frontend URL
**Production Site:** https://frontend-alpha-three-48.vercel.app/

### Live Backend URL
**Backend API:** https://backend-alpha-green-49.vercel.app/api

### Source Code
**GitHub Repository:** https://github.com/zzsss8836699/fullstack-portfolio-blog

---

## 📋 Features

- **Responsive Design**: Beautiful, modern UI with HarmonyOS design style
- **Multi-page Navigation**: Home, Projects, Blog, Contact pages
- **Authentication**: User registration and login with JWT
- **Protected Admin Dashboard**: Manage projects and blog posts
- **Blog System**: View posts, read details, and comment
- **Contact Form**: Send messages directly from the website

---

## 🔌 API Routes & Endpoints

This frontend application communicates with the backend API. Below are all API calls made by the frontend:

### Authentication Routes

#### 1. User Registration
- **Frontend Route:** `/register`
- **API Endpoint:** `POST /api/users/register`
- **Purpose:** Create a new user account
- **Request Body:**
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Frontend Implementation:** `src/pages/Register.js`

#### 2. User Login
- **Frontend Route:** `/login`
- **API Endpoint:** `POST /api/users/login`
- **Purpose:** Authenticate user and receive JWT token
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Frontend Implementation:** `src/pages/Login.js`

---

### Project Routes

#### 3. Get All Projects
- **Frontend Route:** `/projects`
- **API Endpoint:** `GET /api/projects`
- **Purpose:** Fetch and display all portfolio projects
- **Request:** No body required
- **Response Example:**
  ```json
  [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "E-commerce Website",
      "description": "A full-stack e-commerce platform",
      "imageUrl": "https://example.com/image.jpg",
      "repoUrl": "https://github.com/user/repo",
      "liveUrl": "https://example.com",
      "user": "507f1f77bcf86cd799439012"
    }
  ]
  ```
- **Frontend Implementation:** `src/pages/Projects.js`

#### 4. Get Single Project
- **Frontend Route:** `/projects/:id` (if viewing details)
- **API Endpoint:** `GET /api/projects/:id`
- **Purpose:** Fetch details of a specific project
- **URL Parameters:**
  - `id`: Project ID (e.g., `507f1f77bcf86cd799439011`)
- **Request:** No body required
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "E-commerce Website",
    "description": "A full-stack e-commerce platform",
    "imageUrl": "https://example.com/image.jpg",
    "repoUrl": "https://github.com/user/repo",
    "liveUrl": "https://example.com",
    "user": "507f1f77bcf86cd799439012"
  }
  ```

#### 5. Create Project (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `POST /api/projects`
- **Purpose:** Create a new portfolio project
- **Authentication:** Requires JWT token in Authorization header
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request Body:**
  ```json
  {
    "title": "New Project",
    "description": "Project description here",
    "imageUrl": "https://example.com/image.jpg",
    "repoUrl": "https://github.com/user/repo",
    "liveUrl": "https://example.com"
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439013",
    "title": "New Project",
    "description": "Project description here",
    "imageUrl": "https://example.com/image.jpg",
    "repoUrl": "https://github.com/user/repo",
    "liveUrl": "https://example.com",
    "user": "507f1f77bcf86cd799439012"
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

#### 6. Update Project (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `PUT /api/projects/:id`
- **Purpose:** Update an existing project
- **Authentication:** Requires JWT token in Authorization header
- **URL Parameters:**
  - `id`: Project ID
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request Body:**
  ```json
  {
    "title": "Updated Project Title",
    "description": "Updated description",
    "imageUrl": "https://example.com/new-image.jpg",
    "repoUrl": "https://github.com/user/new-repo",
    "liveUrl": "https://new-example.com"
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

#### 7. Delete Project (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `DELETE /api/projects/:id`
- **Purpose:** Delete a project
- **Authentication:** Requires JWT token in Authorization header
- **URL Parameters:**
  - `id`: Project ID
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request:** No body required
- **Response Example:**
  ```json
  {
    "message": "Project removed"
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

---

### Blog Post Routes

#### 8. Get All Blog Posts
- **Frontend Route:** `/blog`
- **API Endpoint:** `GET /api/blog`
- **Purpose:** Fetch and display all blog posts
- **Request:** No body required
- **Response Example:**
  ```json
  [
    {
      "_id": "507f1f77bcf86cd799439014",
      "title": "My First Blog Post",
      "content": "This is the content of my first blog post...",
      "author": {
        "_id": "507f1f77bcf86cd799439012",
        "username": "johndoe"
      },
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
  ```
- **Frontend Implementation:** `src/pages/Blog.js`

#### 9. Get Single Blog Post with Comments
- **Frontend Route:** `/blog/:id`
- **API Endpoint:** `GET /api/blog/:id`
- **Purpose:** Fetch a single blog post with all comments
- **URL Parameters:**
  - `id`: Blog post ID
- **Request:** No body required
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439014",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post...",
    "author": {
      "_id": "507f1f77bcf86cd799439012",
      "username": "johndoe"
    },
    "comments": [
      {
        "_id": "507f1f77bcf86cd799439015",
        "body": "Great post!",
        "author": {
          "_id": "507f1f77bcf86cd799439016",
          "username": "janedoe"
        },
        "createdAt": "2024-01-15T11:00:00.000Z"
      }
    ],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
  ```
- **Frontend Implementation:** `src/pages/BlogDetail.js`

#### 10. Create Blog Post (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `POST /api/blog`
- **Purpose:** Create a new blog post
- **Authentication:** Requires JWT token in Authorization header
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request Body:**
  ```json
  {
    "title": "My New Blog Post",
    "content": "This is the content of my new blog post. It can be quite long..."
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439017",
    "title": "My New Blog Post",
    "content": "This is the content of my new blog post. It can be quite long...",
    "author": "507f1f77bcf86cd799439012",
    "createdAt": "2024-01-15T12:00:00.000Z",
    "updatedAt": "2024-01-15T12:00:00.000Z"
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

#### 11. Update Blog Post (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `PUT /api/blog/:id`
- **Purpose:** Update an existing blog post (only by author)
- **Authentication:** Requires JWT token in Authorization header
- **URL Parameters:**
  - `id`: Blog post ID
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request Body:**
  ```json
  {
    "title": "Updated Blog Post Title",
    "content": "Updated content here..."
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

#### 12. Delete Blog Post (Protected)
- **Frontend Route:** `/admin` (Admin Dashboard)
- **API Endpoint:** `DELETE /api/blog/:id`
- **Purpose:** Delete a blog post (only by author)
- **Authentication:** Requires JWT token in Authorization header
- **URL Parameters:**
  - `id`: Blog post ID
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request:** No body required
- **Response Example:**
  ```json
  {
    "message": "Post removed"
  }
  ```
- **Frontend Implementation:** `src/pages/Admin.js`

---

### Comment Routes

#### 13. Get Comments for a Post
- **Frontend Route:** `/blog/:id` (Blog Detail Page)
- **API Endpoint:** `GET /api/blog/:postId/comments`
- **Purpose:** Fetch all comments for a specific blog post
- **URL Parameters:**
  - `postId`: Blog post ID
- **Request:** No body required
- **Response Example:**
  ```json
  [
    {
      "_id": "507f1f77bcf86cd799439018",
      "body": "Great post!",
      "author": {
        "_id": "507f1f77bcf86cd799439016",
        "username": "janedoe"
      },
      "post": "507f1f77bcf86cd799439014",
      "createdAt": "2024-01-15T11:00:00.000Z"
    }
  ]
  ```
- **Frontend Implementation:** `src/pages/BlogDetail.js`

#### 14. Add Comment to Post (Protected)
- **Frontend Route:** `/blog/:id` (Blog Detail Page)
- **API Endpoint:** `POST /api/blog/:postId/comments`
- **Purpose:** Add a comment to a blog post
- **Authentication:** Requires JWT token in Authorization header
- **URL Parameters:**
  - `postId`: Blog post ID
- **Request Headers:**
  ```
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Request Body:**
  ```json
  {
    "body": "This is my comment on this post!"
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439019",
    "body": "This is my comment on this post!",
    "author": "507f1f77bcf86cd799439012",
    "post": "507f1f77bcf86cd799439014",
    "createdAt": "2024-01-15T13:00:00.000Z"
  }
  ```
- **Frontend Implementation:** `src/pages/BlogDetail.js` and `src/components/CommentForm.js`

---

### Contact Route

#### 15. Send Contact Message
- **Frontend Route:** `/contact`
- **API Endpoint:** `POST /api/contact`
- **Purpose:** Submit a contact form message
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch with you regarding..."
  }
  ```
- **Response Example:**
  ```json
  {
    "_id": "507f1f77bcf86cd79943901a",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch with you regarding...",
    "createdAt": "2024-01-15T14:00:00.000Z"
  }
  ```
- **Frontend Implementation:** `src/pages/Contact.js`

---

## 🗺️ Frontend Routes (React Router)

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | `Home.js` | Public | Homepage with introduction |
| `/projects` | `Projects.js` | Public | Portfolio projects gallery |
| `/blog` | `Blog.js` | Public | Blog posts list |
| `/blog/:id` | `BlogDetail.js` | Public | Individual blog post with comments |
| `/contact` | `Contact.js` | Public | Contact form |
| `/login` | `Login.js` | Public | User login page |
| `/register` | `Register.js` | Public | User registration page |
| `/admin` | `Admin.js` | Protected | Admin dashboard for content management |

---

## 🏗️ Project Structure

```
src/
  ├── components/       # Reusable components
  │   ├── Header.js
  │   ├── Footer.js
  │   ├── ProjectCard.js
  │   ├── BlogPostCard.js
  │   ├── CommentForm.js
  │   ├── CommentItem.js
  │   └── ProtectedRoute.js
  ├── pages/           # Page components
  │   ├── Home.js
  │   ├── Projects.js
  │   ├── Blog.js
  │   ├── BlogDetail.js
  │   ├── Contact.js
  │   ├── Login.js
  │   ├── Register.js
  │   └── Admin.js
  ├── context/         # Context providers
  │   └── AuthContext.js
  ├── App.js           # Main app component with routing
  ├── index.js         # Entry point
  └── index.css        # Global styles
```

---

## 💻 Technologies Used

- React 18
- React Router DOM v6
- Tailwind CSS
- Axios (for API calls)
- Context API (for global state management)

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zzsss8836699/fullstack-portfolio-blog.git
   cd fullstack-portfolio-blog/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (optional, defaults to localhost):
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   For production, set this to your deployed backend API URL:
   ```env
   REACT_APP_API_URL=https://your-backend-api.vercel.app/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   The app will open at http://localhost:3000

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🔐 Authentication Flow

1. **User Registration**: User creates account via `/register` page
2. **Login**: User logs in via `/login` page, receives JWT token
3. **Token Storage**: JWT token is stored in localStorage
4. **Protected Routes**: Token is sent with every protected API request in Authorization header
5. **Admin Access**: Only logged-in users can access `/admin` dashboard
6. **Logout**: Token is removed from localStorage

---

## 🎨 Design

The UI follows HarmonyOS design principles with:
- **Primary Color (Green)**: #36965c
- **Secondary Color (Pink)**: #f87171
- Clean, modern interface
- Responsive layout for all devices
- Smooth transitions and hover effects
- Professional typography

---

## 🌐 Deployment

### Vercel Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   - Connect GitHub repository to Vercel
   - Set Root Directory to `frontend`
   - Add environment variable: `REACT_APP_API_URL=https://your-backend-api.vercel.app/api`
   - Deploy

### Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder:
   - Drag and drop the `build` folder to Netlify
   - Or connect via GitHub repository
   - Set environment variable: `REACT_APP_API_URL`

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `https://your-api.vercel.app/api` |

---

## 🎯 Features Implemented

- ✅ User registration and login
- ✅ JWT authentication with Context API
- ✅ Protected routes (Admin Dashboard)
- ✅ View all projects (public)
- ✅ View all blog posts (public)
- ✅ View individual blog post with comments (public)
- ✅ Create/Update/Delete projects (admin only)
- ✅ Create/Update/Delete blog posts (admin only)
- ✅ Add comments to blog posts (logged-in users)
- ✅ Submit contact form (public)
- ✅ Responsive design
- ✅ Loading and error states
- ✅ HarmonyOS-inspired UI

---

## 📞 API Configuration

The frontend is configured to communicate with the backend API at:

**Development:** `http://localhost:5000/api`
**Production:** `https://backend-alpha-green-49.vercel.app/api`

All API calls are made using Axios with the base URL configured in each component.

---

## 🔍 Example API Request (from Frontend Code)

```javascript
// Example: Fetching all projects
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Example: Creating a project (protected)
const createProject = async (projectData, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/projects`,
      projectData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};
```

---

## 📄 License

This project is created for educational purposes.
