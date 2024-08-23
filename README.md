# Todo API

A simple Todo API built with Express.js that allows you to create, read, update, and delete (CRUD) todos stored in a JSON file. This project also includes a frontend interface to interact with the API.

## Prerequisites

- npm

## Installation

1. Clone the repository or download the project files.

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `todos.json` file in the project root if it does not exist. This file will hold the list of todos in JSON format.

   Example:

   ```json
   [
     { "id": 1, "title": "Sample Todo" }
   ]
   ```

## Usage

### Backend

1. **Run the Backend Server**

   Start the backend server by running:

   ```bash
   node main.js
   ```

   The server will start on `http://localhost:3000`.

2. **Endpoints**

   You can use the following API endpoints:

   - **GET /todos**: Retrieve all todos.
   - **GET /todos/:id**: Retrieve a specific todo by ID.
   - **POST /todos**: Add a new todo.
   - **PATCH /todos/:id**: Update the title of a specific todo.
   - **PUT /todos/:id**: Update a todo completely.
   - **DELETE /todos/:id**: Delete a specific todo by ID.

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

## Notes

- The todos are stored in a `todos.json` file and persist between server restarts.
- Ensure `todos.json` has valid JSON format before starting the server.

## Example Request

To add a new todo using `curl`:

```bash
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"id": 2, "title": "New Todo"}'
```

## DEMO VIDEO





https://github.com/user-attachments/assets/de3d1577-eac9-4cb9-847e-58239c3dec0d


