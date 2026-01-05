# Task Tracker Web Application

A simple full-stack Task Tracker web application that allows users to **create, update, edit, delete, and list tasks**.  
This project demonstrates clean separation between frontend and backend, RESTful API design, and practical usage of AI development tools.

---

## 📌 Features

- Create a new task
- List all tasks
- Edit task title inline
- Mark tasks as completed / uncompleted
- Delete tasks
- Persistent storage using SQLite

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- HTML & CSS
- Fetch API

### Backend
- Node.js
- Express.js
- SQLite (file-based database)
- REST API

---

## 📁 Project Structure
<img width="379" height="707" alt="image" src="https://github.com/user-attachments/assets/3e8a6cba-89ee-421f-8a9c-ae8046c9a4c5" />


---

## ▶️ How to Run the Application
### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/task-tracker.git
cd task-tracker
```
### 2️⃣ Run Backend (Express + SQLite)
```bash
cd backend
npm install
npm start
```

### 3️⃣ Run Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
### 🧠 Design Decisions

- SQLite was chosen for simplicity and zero external setup
- REST API ensures clear frontend/backend separation
- React with hooks keeps state management simple and readable
- Inline editing avoids unnecessary modal complexity
- Backend supports partial updates to prevent overwriting fields
- No over-engineering (no Redux, no heavy UI libraries)

### 🤖 AI Tool Usage

- AI development tools (ChatGPT) were used during development for:
- Generating initial project structure
- Suggesting REST API patterns
- Helping with React hooks usage
- Drafting boilerplate code for CRUD operations
- Reviewing logic for edge cases

### Manual Changes & Corrections

- Refactored generated code for readability
- Simplified state management
- Improved UX for inline editing
- Fixed async handling and API calls
- Ensured clean separation of concerns


