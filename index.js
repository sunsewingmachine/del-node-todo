// index.js
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bismillah, 123!');
});

// sample in-memory storage for todo items2
let todos = [];

// http://localhost:3000/todos
// create a new todo item
app.post('/todos', (req, res) => {

  // const {title, description} = req.query; // used for GET methodcls
  const {title, description} = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description
  }

  // push changes - Good
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
});


// gets all todo items
app.get('/todos-get', (req, res) => {
  console.log(todos);
  res.status(201).json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
