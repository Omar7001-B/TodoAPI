const express = require("express");
const cors = require("cors");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
} = require("./todos.js");
const app = express();

app.use(express.json());
app.options("*", cors()); // Preflight request handling
app.use(cors()); // This allows all origins

// Routes
app.get("/todos", getTodos);
app.get("/todos/:id", getTodoById);
app.post("/todos", createTodo);
app.patch("/todos/:id", updateTodoPatch);
app.put("/todos/:id", updateTodoPut);
app.delete("/todos/:id", deleteTodo);

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
