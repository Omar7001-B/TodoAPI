# Simple Todo API

A simple Todo API built with Express.js that allows you to create, read, update, and delete (CRUD) todos. This project also includes a frontend interface to interact with the API.

## Prerequisites

- npm

## Project Structure

```
Simple Todo App
│
├── Models
│   ├── todoModel.js
│   └── userModel.js
│
├── Controllers
│   ├── todoController.js
│   └── userController.js
│
└── Routes
    ├── todoRoutes.js
    └── userRoutes.js
```

## Installation

1. Clone the repository or download the project files.

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Backend

1. **Run the Backend Server**

   Start the backend server by running:

   ```bash
   npm run start
   ```

   The server will start on `http://localhost:3000`.

2. **Endpoints**

   You can use the following API endpoints:

     **Todo Endpoints:**

   - **GET /todos/user/:userId**: Retrieve all user todos.
   - **GET /todos/:id**: Retrieve a specific todo by ID.
   - **POST /todos**: Add a new todo.
   - **PATCH /todos/:id**: Update the title of a specific todo.
   - **PUT /todos/:id**: Update a todo completely.
   - **DELETE /todos/:id**: Delete a specific todo by ID.

     **User Endpoints:**

   - **GET /user/:id**: Retrieve todos for a specific user by ID.
   - **POST /user**: Create a new todo for a user.
   - **GET /user/:id/todo**: Retrieve a specific todo by user ID.
   - **PATCH /user/:id/todo**: Update a todo for a specific user by ID using PATCH.
   - **PUT /user/:id/todo**: Update a todo for a specific user by ID using PUT.
   - **DELETE /user/:id/todo**: Delete a todo for a specific user by ID.

3. **Debugging Logs**

   To log requests to a file, you can run the server with:

   ```bash
   node main.js >> log.txt
   ```

### Frontend

1. **Open the Frontend**

   After starting the backend server, open the frontend in your web browser by navigating to the appropriate URL (e.g., `http://localhost:3000` if the frontend is served from the same port).

2. **Interact with the API**

   Use the frontend interface to add, view, update, and delete todos. The frontend interacts with the backend API to simulate an actual todo list.

## Features

- **Add New Todo:** Enter a title in the text box and click the "Add Todo" button to create a new todo.
- **View Todos:** The list of todos will be displayed below the input field.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB (or any other database used in your setup)

## Notes

- The todos are stored in a database and persist between server restarts. Ensure your database is correctly configured before starting the server.


## DEMO VIDEO
https://github.com/user-attachments/assets/de3d1577-eac9-4cb9-847e-58239c3dec0d


## Contact
For any questions or issues, please reach out.