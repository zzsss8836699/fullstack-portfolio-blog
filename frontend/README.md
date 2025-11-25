# Portfolio & Blog - Frontend

A modern, responsive React application for showcasing portfolio projects and blog posts.

## Live Frontend URL
[Your deployed frontend URL here]

## Live Backend URL
[Your deployed backend API URL here]

## Features

- **Responsive Design**: Beautiful, modern UI with HarmonyOS design style
- **Multi-page Navigation**: Home, Projects, Blog, Contact pages
- **Authentication**: User registration and login with JWT
- **Protected Admin Dashboard**: Manage projects and blog posts
- **Blog System**: View posts, read details, and comment
- **Contact Form**: Send messages directly from the website

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Axios
- Context API for state management

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory (optional, defaults to localhost):
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   For production, set this to your deployed backend API URL.

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── components/       # Reusable components
  │   ├── Header.js
  │   ├── Footer.js
  │   ├── ProjectCard.js
  │   ├── BlogPostCard.js
  │   ├── CommentForm.js
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
  ├── App.js           # Main app component
  ├── index.js         # Entry point
  └── index.css        # Global styles
```

## Pages

- **/** - Home page with introduction
- **/projects** - Portfolio projects gallery
- **/blog** - Blog posts list
- **/blog/:id** - Individual blog post with comments
- **/contact** - Contact form
- **/login** - User login
- **/register** - User registration
- **/admin** - Protected admin dashboard (requires authentication)

## Connecting to Backend

The frontend communicates with the backend API. Make sure to:

1. Set the `REACT_APP_API_URL` environment variable to your backend URL
2. Ensure CORS is properly configured on the backend
3. The backend should be running and accessible

## Deployment

This project can be deployed to:
- **Vercel**: Connect your GitHub repo and deploy
- **Netlify**: Drag and drop the `build` folder or connect via Git
- **Other platforms**: Build the project and deploy the `build` folder

### Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

3. Set the `REACT_APP_API_URL` environment variable to your deployed backend URL

## Design

The UI follows HarmonyOS design principles with:
- Green primary color (#36965c)
- Pink secondary color (#f87171)
- Clean, modern interface
- Responsive layout for all devices
- Smooth transitions and hover effects

