# Todo API

A simple Todo API built with Express.js that allows you to create, read, update, and delete (CRUD) todos stored in a JSON file.

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

1. Run the application:

   ```bash
   node main.js
   ```

2. The server will start on `http://localhost:3000`.

3. You can now use the following endpoints:

   ### Endpoints

   - **GET /todos**: Retrieve all todos.
   - **GET /todos/:id**: Retrieve a specific todo by ID.
   - **POST /todos**: Add a new todo.
   - **PATCH /todos/:id**: Update the title of a specific todo.
   - **PUT /todos/:id**: Update a todo completely.
   - **DELETE /todos/:id**: Delete a specific todo by ID.

4. **Debugging Logs**: To log requests to a file, you can run the server with:

   ```bash
   node main.js >> log.txt
   ```

## Notes

- The todos are stored in a `todos.json` file and persist between server restarts.
- Ensure `todos.json` has valid JSON format before starting the server.

## Example Request

To add a new todo:

```bash
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"id": 2, "title": "New Todo"}'
```

## License

This project is licensed under the MIT License.
