# Todo API Backend

A simple Todo API built with Express.js for managing todos stored in a database.

## Prerequisites

- `Node.js`
- `npm`
- A database (e.g., MongoDB, PostgreSQL, MySQL)

## Installation

1. **Clone the repository** or download the project files.

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the Server:**

   ```bash
   node main.js
   ```

   The server will be available at `http://localhost:3000`.

2. **API Endpoints:**

   - `GET /todos`: Retrieve all todos.
   - `GET /todos/:id`: Retrieve a specific todo by ID.
   - `POST /todos`: Add a new todo.
   - `PATCH /todos/:id`: Update the title of a todo.
   - `PUT /todos/:id`: Completely update a todo.
   - `DELETE /todos/:id`: Delete a todo by ID.

   - `GET /user/:id`: Retrieve all todos for a specific user.
   - `GET /users`: Retrieve all users.
   - `GET /users/:id`: Retrieve a specific user by ID.
   - `POST /users`: Add a new user.
   - `PUT /users/:id`: Update a user.
   - `DELETE /users/:id`: Delete a user by ID.

## Debugging

To log requests to a file, run:

```bash
node main.js >> log.txt
```

## Notes

- Todos and user data are stored in a database and persist between server restarts.
- Ensure your database configuration is correctly set up in the `.env` file.