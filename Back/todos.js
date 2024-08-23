const fs = require("fs");
const todosFileName = "./todos.json";

// Data
let todos = JSON.parse(fs.readFileSync(todosFileName));

// Debug
const debug = true;
function debugLog(message) {
  if (debug) {
    console.log(message);
  }
}

// Handlers
function getTodos(req, res) {
  debugLog("Request to get all todos");
  res.json(todos);
}

function getTodoById(req, res) {
  let { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  debugLog("Request to get todo with id: " + id);
  if (todo) {
    res.json(todo);
  } else {
    res.json({ message: "Todo not found", todos: todos });
  }
}

function createTodo(req, res) {
  let body = req.body;
  debugLog("Request to create new todo: " + JSON.stringify(body));
  todos.push(body);
  fs.writeFileSync(todosFileName, JSON.stringify(todos));
  res.json(todos);
}

function updateTodoPatch(req, res) {
  let [id, body] = [req.params.id, req.body];
  let todo = todos.find((x) => x.id == id);
  debugLog(
    "Request to update using patch method: " + id + ", " + JSON.stringify(body)
  );
  if (todo) {
    todo.title = body.title;
    fs.writeFileSync(todosFileName, JSON.stringify(todos));
    res.json(todos);
  } else {
    res.json({ message: "Todo not found", todos: todos });
  }
}

function updateTodoPut(req, res) {
  let [id, body] = [req.params.id, req.body];
  let todo = todos.find((x) => x.id == id);
  debugLog(
    "Request to update using put method: " + id + ", " + JSON.stringify(body)
  );
  if (todo) {
    Object.assign(todo, body);
    fs.writeFileSync(todosFileName, JSON.stringify(todos));
    res.json(todos);
  } else {
    res.json({ message: "Todo not found", todos: todos });
  }
}

function deleteTodo(req, res) {
  let id = req.params.id;
  let todo = todos.find((todo) => todo.id == id);
  debugLog("Request to delete todo with id: " + id);
  if (todo) {
    todos = todos.filter((todo) => todo.id != id);
    fs.writeFileSync(todosFileName, JSON.stringify(todos));
    res.json(todos);
  } else {
    res.json({ message: "Todo not found", todos: todos });
  }
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
};
