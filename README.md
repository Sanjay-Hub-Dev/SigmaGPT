# 🚀 SigmaGPT

SigmaGPT is a full-stack AI-powered chat application that allows users to interact with an AI assistant in real time. It supports conversation threads, chat history, and a clean ChatGPT-like interface.

🔗 **Live Demo:** https://sigma-gpt-git-main-sanjays-projects-b9ad18ce.vercel.app/

---

## ✨ Features

* 🤖 AI-powered chat responses
* 🧵 Thread-based conversation system
* 💬 Real-time chat UI (ChatGPT-like)
* 📝 Markdown rendering with syntax highlighting
* ⚡ Typing animation effect for AI responses
* 📜 Chat history tracking
* 🌐 Fully deployed (Frontend + Backend)

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Context API (State Management)
* CSS (Custom Styling)
* react-markdown
* rehype-highlight

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* CORS

### Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## 📂 Project Structure

```
SigmaGPT/
│
├── frontend/      # React frontend (Vite)
│
├── Backend/       # Express backend (API)
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sanjay-dhavanam/SigmaGPT.git
cd SigmaGPT
```

---

### 2️⃣ Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=8080
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 Deployment

### Backend (Render)

* Root Directory → `Backend`
* Build Command → `npm install`
* Start Command → `node server.js`

### Frontend (Vercel)

* Root Directory → `frontend`
* Build Command → `npm run build`
* Output Directory → `dist`

---

## ⚠️ Important Notes

* Always use **HTTPS API URLs** in production
* Enable **CORS** in backend
* Render free tier may have cold start delays

---

## 🚀 Future Improvements

* User authentication
* Persistent chat threads
* Streaming responses
* Dark/Light theme toggle
* File/image input support

---

## 👨‍💻 Author

**Sanjay Dhavanam**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
