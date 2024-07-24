const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database(':memory:');

app.use(express.json());

// Initialize database
db.serialize(() => {
  db.run("CREATE TABLE todo (id INT, task TEXT)");
});

// Get all tasks
app.get('/todos', (req, res) => {
  db.all("SELECT * FROM todo", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Add a new task
app.post('/todos', (req, res) => {
  const { id, task } = req.body;
  db.run(`INSERT INTO todo (id, task) VALUES (?, ?)`, [id, task], function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.status(201).json({ id, task });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
