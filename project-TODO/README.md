API

mkdir api && cd api
npm init -y
npm install express sqlite3


create index.js

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

-------------------------- Docker file --------------------------------
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
---------------------------------------------------------------------------

UI 

npx create-react-app ui
cd ui

Modify src/App.js:


import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: todos.length + 1, task }),
    })
    .then(response => response.json())
    .then(newTodo => setTodos([...todos, newTodo]));
  };

  return (
    <div>
      <h1>TODO List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



-------------------------- Docker file --------------------------------

FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

