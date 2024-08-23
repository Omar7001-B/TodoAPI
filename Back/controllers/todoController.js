const todosModel = require("../models/todoModel.js");

// Debug
const debug = true;
function debugLog(message) {
  if (debug) {
    console.log(message);
  }
}

// Handlers
async function getTodos(req, res) {
  try {
    debugLog("Request to get all todos");
    const todos = await todosModel.find(); // Use .find() to fetch all documents
    console.log("Todos: ", todos);
    res.json(todos);
  } catch (err) {
    res.json({ message: "Error fetching todos", error: err });
  }
}

async function getTodoById(req, res) {
  let { id } = req.params;
  try {
    debugLog("Request to get todo with id: " + id);
    const todo = await todosModel.findById(id);
    if (todo) {
      res.json(todo);
    } else {
      res.json({ message: "Todo not found" });
    }
  } catch (err) {
    res.json({ message: "Error fetching todo", error: err });
  }
}

async function createTodo(req, res) {
  let body = req.body;
  try {
    debugLog("Request to create new todo: " + JSON.stringify(body));
    const newTodo = await todosModel.create(body);
    res.json({ message: "Todo created", todo: newTodo });
  } catch (err) {
    res.json({ message: "Error creating todo", error: err });
  }
}

async function updateTodoPatch(req, res) {
  let [id, body] = [req.params.id, req.body];
  try {
    debugLog(
      "Request to update using patch method: " +
        id +
        ", " +
        JSON.stringify(body)
    );
    // Find the todo and update only the specified fields
    const todo = await todosModel.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    if (todo) {
      res.json({ message: "Todo updated", todo });
    } else {
      res.json({ message: "Todo not found" });
    }
  } catch (err) {
    res.json({ message: "Error updating todo", error: err });
  }
}

async function updateTodoPut(req, res) {
  let [id, body] = [req.params.id, req.body];
  try {
    debugLog(
      "Request to update using put method: " + id + ", " + JSON.stringify(body)
    );
    const todo = await todosModel.findByIdAndUpdate(id, body, { new: true });
    if (todo) {
      const todos = await todosModel.find(); // Fetch updated list of todos
      res.json({ message: "Todo updated", todo, full: todos });
    } else {
      res.json({ message: "Todo not found" });
    }
  } catch (err) {
    res.json({ message: "Error updating todo", error: err });
  }
}

async function deleteTodo(req, res) {
  let id = req.params.id;
  try {
    debugLog("Request to delete todo with id: " + id);
    // Use Mongoose's findByIdAndDelete
    const todo = await todosModel.findByIdAndDelete(id);
    if (todo) {
      res.json({ message: "Todo deleted" });
    } else {
      res.json({ message: "Todo not found" });
    }
  } catch (err) {
    res.json({ message: "Error deleting todo", error: err });
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
