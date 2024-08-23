const mongoose = require("mongoose");

// Schema for todo
const todosSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 50,
  },
  status: {
    type: String,
    enum: ["done", "in progress", "todo"],
    default: "todo",
  },
});

const todoModel = mongoose.model("Todo", todosSchema);

module.exports = todoModel;
