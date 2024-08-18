const apiUrl = 'http://localhost:3000/todos';

// Fetch all todos and display them
function getTodos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; // Clear current list
            todos.forEach(todo => {
                const todoDiv = document.createElement('div');
                todoDiv.className = 'todo-item';
                todoDiv.innerHTML = `
                    <span>${todo.title}</span>
                    <span class="actions">
                        <button onclick="editTodo(${todo.id})">Edit</button>
                        <button onclick="deleteTodo(${todo.id})">Delete</button>
                    </span>
                `;
                todoList.appendChild(todoDiv);
            });
        });
}

// Add a new todo
function addTodo() {
    const title = document.getElementById('new-todo-title').value;
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Date.now(), title }),
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('new-todo-title').value = ''; // Clear input
        getTodos();
    });
}

// Edit a todo
function editTodo(id) {
    const newTitle = prompt('Enter new title:');
    if (newTitle) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle }),
        })
        .then(response => response.json())
        .then(() => getTodos());
    }
}

// Delete a todo
function deleteTodo(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => getTodos());
}

// Initialize the todo list on page load
getTodos();
