# ⚙️ Code Generator Web App

A full-stack **AI-powered code generator web application** that helps users generate and test code snippets instantly.  
Built with **FastAPI**, **OpenAI API**, **Clerk authentication**, and a **modern JavaScript(React) frontend** for a seamless developer experience.

---

## 🚀 Features

- 🤖 **AI Code Generation** — Generate code snippets in multiple languages using OpenAI's LLM.
- 🧠 **FastAPI Backend** — High-performance backend for handling requests efficiently.
- 🔐 **User Authentication** — Secure login/signup powered by Clerk.
- 💡 **Responsive Frontend** — Intuitive, minimal, and interactive UI built with JavaScript.
- ⚡ **Real-Time Response** — Generate and display code in real-time.
- 🗂️ **Modular Architecture** — Clean folder structure for easy scalability.

---

## 🏗️ Tech Stack

**Frontend:**
- JavaScript (Vanilla & framework like React)
- CSS
- Clerk Authentication SDK

**Backend:**
- Python FastAPI
- OpenAI API
- Uvicorn (ASGI server)

**Others:**
- Git & GitHub
- Environment variables for API keys
- JSON for data handling

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/thehariompandey/Code-Generator-Web-app.git
cd Code-Generator-Web-app
````

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # For Windows
# source venv/bin/activate   # For Linux/Mac
pip install -r requirements.txt
```

Create a `.env` file in your backend directory and add:

```bash
OPENAI_API_KEY=your_openai_api_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

Run the server:

```bash
uv run server.py --reload
```

The backend will run on:

```
http://127.0.0.1:8000
```

### 3️⃣ Frontend Setup

```bash
cd frontend
# If using npm:
npm install
npm start
```
---

## 🔑 Environment Variables

| Variable Name      | Description                      |
| ------------------ | -------------------------------- |
| `OPENAI_API_KEY`   | Your OpenAI API key              |
| `CLERK_SECRET_KEY` | Your Clerk authentication secret |
| `PORT`             | (Optional) Custom backend port   |

---

## 📁 Folder Structure

```
Code-Generator-Web-app/
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── js/
│   ├── css/
│   └── assets/
│
└── README.md
```

---

## 🧩 API Endpoints

| Method | Endpoint    | Description                     |
| ------ | ----------- | ------------------------------- |
| `POST` | `/generate` | Generates code using OpenAI API |
| `GET`  | `/history`   | History check endpoint           |

---

## 🧠 Future Improvements

* 🌍 Add multiple LLM support (Claude, Gemini, etc.)
* 💾 Enable code saving & sharing
* 🧩 Add syntax highlighting and copy button
* 📊 Add usage analytics for users

---

## 🧑‍💻 Author

**Hariom Pandey**
📍 *B.Sc. Computer Science and Data Analytics @ IIT Patna*
💼 MERN & Python Developer | Data Science Enthusiast
🔗 [GitHub](https://github.com/thehariompandey) | [LinkedIn](https://www.linkedin.com/in/hariom-pandey-871694296/)

---

## 🪪 License

This project is licensed under the **MIT License** — you’re free to use, modify, and distribute it with attribution.

---

⭐ **If you like this project, don’t forget to star the repo!**

```

---

Would you like me to include **a "How It Works" section** (with explanation of flow: user login → prompt → API → response)?  
It’ll make your README more impressive for recruiters.
```
