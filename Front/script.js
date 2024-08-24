const apiUrl = "http://localhost:3000/todos";
let currentUserId = localStorage.getItem("loggedInUser"); // Retrieve user ID from local storage

// Fetch todos for the logged-in user and display them
function getTodos() {
  if (!currentUserId) {
    alert("User not logged in.");
    return;
  }

  fetch(`${apiUrl}/user/${currentUserId}`)
    .then((response) => response.json())
    .then((todos) => {
      const todoList = document.getElementById("todo-list");
      todoList.innerHTML = ""; // Clear current list
      todos.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo-item";
        todoDiv.innerHTML = `
                    <span>${todo.title}</span>
                    <span class="actions">
                        <button onclick="editTodo('${todo._id}')">Edit</button>
                        <button onclick="deleteTodo('${todo._id}')">Delete</button>
                    </span>
                `;
        todoList.appendChild(todoDiv);
      });
    })
    .catch((error) => console.error("Error fetching todos:", error));
}

// Add a new todo
function addTodo() {
  const title = document.getElementById("new-todo-title").value;
  if (!title.trim()) {
    alert("Please enter a todo title.");
    return;
  }

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, user: currentUserId }),
  })
    .then((response) => response.json())
    .then(() => {
      document.getElementById("new-todo-title").value = ""; // Clear input
      getTodos();
    })
    .catch((error) => console.error("Error adding todo:", error));
}

// Edit a todo
function editTodo(id) {
  const newTitle = prompt("Enter new title:");
  if (newTitle) {
    fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => response.json())
      .then(() => getTodos())
      .catch((error) => console.error("Error editing todo:", error));
  }
}

// Delete a todo
function deleteTodo(id) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => getTodos())
    .catch((error) => console.error("Error deleting todo:", error));
}

// Initialize the todo list on page load
getTodos();
