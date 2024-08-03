
// index.js
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bismillah, 123!');
});

// sample in-memory storage for todo items
let todos = [];

// http://localhost:3000/todos?titile=first&description=firstitem
// create a new todo item
app.get('/todos', (req, res) => {
  // const {title, description} = req.query; // used for GET methodcls
  const {title, description} = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description
  }
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
