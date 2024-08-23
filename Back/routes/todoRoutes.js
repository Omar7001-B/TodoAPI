const express = require("express");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
  //createNewTodo,
} = require("../controllers/todoController.js");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.patch("/:id", updateTodoPatch);
router.put("/:id", updateTodoPut);
router.delete("/:id", deleteTodo);

module.exports = router;
