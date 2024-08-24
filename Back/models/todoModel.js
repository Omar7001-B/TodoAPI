// models/todoModel.js
const mongoose = require("mongoose");

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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

const todoModel = mongoose.model("Todo", todosSchema);

module.exports = todoModel;
