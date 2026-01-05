const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db");

db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`);

// Get all tasks
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// Create task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  db.run("INSERT INTO tasks (title) VALUES (?)", [title], function () {
    res.json({ id: this.lastID, title, completed: 0 });
  });
});

// Update task
// Update task (title + completed)
app.put("/tasks/:id", (req, res) => {
  const { title, completed } = req.body;

  db.run(
    "UPDATE tasks SET title = COALESCE(?, title), completed = COALESCE(?, completed) WHERE id = ?",
    [title, completed, req.params.id],
    () => res.json({ success: true })
  );
});


// Delete task
app.delete("/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ?", [req.params.id], () =>
    res.json({ success: true })
  );
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
