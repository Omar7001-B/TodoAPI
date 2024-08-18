const express = require("express");
const cors = require("cors");
const app = express();
const todosFileName = "./todos.json";

app.use(express.json());
app.options("*", cors()); // Preflight request handling
app.use(cors()); // This allows all origins

// Data
let fs = require("fs");
let todos = JSON.parse(fs.readFileSync(todosFileName));

// Debug
// Note to log inside file, use node main.js >> log.txt
const debug = true;
function debugLog(message) {
  if (debug) {
    console.log(message);
  }
}

app.get("/todos", function (req, res) {
  debugLog("Request to get all todos");
  res.json(todos);
});

app.get("/todos/:id", function (req, res) {
  let { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  debugLog("Request to get todo with id: " + id);
  if (todo) {
    res.json(todo);
  } else {
    res.json({ message: "Todo not found", todos: todos });
  }
});

app.post("/todos", function (req, res) {
  let body = req.body;
  debugLog("Request to create new todo: " + JSON.stringify(body));
  todos.push(body);
  fs.writeFileSync(todosFileName, JSON.stringify(todos));
  res.json(todos);
});

app.patch("/todos/:id", function (req, res) {
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
});

app.put("/todos/:id", function (req, res) {
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
});

app.delete("/todos/:id", function (req, res) {
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
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
