// controllers/userController.js
const userModel = require("../models/userModel.js");

// Debug
const debug = true;
function debugLog(message) {
  if (debug) {
    console.log(message);
  }
}

// Helper function to construct query based on the format of id
function constructUserQuery(id) {
  return id.includes("@")
    ? { email: id }
    : id.length === 24
    ? { _id: id }
    : { username: id };
}

// Handlers
async function getUsers(req, res) {
  try {
    debugLog("Request to get all users");
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    debugLog(`Request to get user with id (username/email/ID): ${id}`);

    // Construct query based on the format of id
    const query = constructUserQuery(id);

    debugLog("Query: " + JSON.stringify(query));
    const user = await userModel.findOne(query);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
}

async function createUser(req, res) {
  let body = req.body;
  try {
    debugLog("Request to create new user: " + JSON.stringify(body));
    const newUser = await userModel.create(body);
    res.json({ message: "User created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
}

async function updateUser(req, res) {
  let [id, body] = [req.params.id, req.body];
  try {
    debugLog("Request to update user: " + id + ", " + JSON.stringify(body));
    const query = constructUserQuery(id);
    const user = await userModel.findOneAndUpdate(query, body, { new: true });
    if (user) {
      res.json({ message: "User updated", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
}

async function deleteUser(req, res) {
  let id = req.params.id;
  try {
    debugLog("Request to delete user with id: " + id);
    const query = constructUserQuery(id);
    const user = await userModel.findOneAndDelete(query);
    if (user) {
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
