# 🎬 Movie Explorer App

A responsive and fully playable Movies App built in two versions:

1. **Front-End Only:** HTML, CSS, and JavaScript using the TMDB API  
2. **Full-Stack:** Node.js, Express, MongoDB with a React-style front-end

---

## 🌐 Version 1: Front-End Only

This version fetches and displays real-time data from The Movie Database (TMDB) API.

### ✨ Features
- Movie poster grid
- Search bar with live results
- Responsive layout
- Movie ratings from TMDB

### 🚀 How to Run
1. Clone the repository
2. Replace `YOUR_API_KEY` in `script.js` with your TMDB key  
   Get one here: [TMDB API](https://www.themoviedb.org/settings/api)
3. Open `index.html` in your browser

---

## 🖥️ Version 2: Full-Stack (Node.js + Express + MongoDB)

This version allows users to **save favorite movies** to a database.

### 🧩 Features
- All features of the front-end version
- Express server with REST API
- MongoDB storage (Atlas or local)
- `POST` requests for saving movies

### 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB

### 📂 Setup

#### 🔐 1. Create `.env`
```env
MONGO_URI=your_mongodb_connection_string
