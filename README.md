# Infloso Assignment – Full-Stack Authentication System (MelodyVerse Theme)

This project is a **Full-Stack Authentication System** created as part of the **Infloso Developer Assignment**.  
It features **secure user Signup, Login, JWT-based authentication, protected routes**, and a modern **React UI (MelodyVerse Theme)**.

Users can create an account, login, and access protected content only after successful authentication.

---

## 🚀 Tech Stack

### 🖥 Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- LocalStorage / SessionStorage

### 🖧 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (`jsonwebtoken`)
- bcrypt hashing
- dotenv
- CORS

---

## ✨ Features

### 🔐 Authentication
- Signup with username + email
- Login with email and password
- Password confirmation logic
- Hashing passwords with bcrypt
- JWT generation with expiry
- Token stored securely on client

### 🛡 Security
- Unique email / username enforcement
- JWT validation in protected routes
- Middleware for token verification
- Error handling and input validation

### 🎨 UI/UX (MelodyVerse Theme)
- Modern music-inspired UI
- Responsive design with Tailwind
- Form validation & clear error messages
- Terms & conditions checkbox
- “Remember Me” option (local or session storage)
- Simulated welcome email notification

---

## 🗂️ Folder Structure

Infloso_assignment/
│
├── backend/
│ ├── controllers/
│ │ └── authController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── db.js
│ ├── app.js
│ ├── package.json
│ └── .env
│
└── frontend/
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── Home.jsx
│ ├── components/
│ │ └── ProtectedRoute.jsx
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ └── main.jsx
├── public/
├── index.html
├── package.json
└── tailwind.config.js
