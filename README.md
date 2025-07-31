# Baliga Backend

This is a high-performance Node.js backend project built with [Fastify](https://www.fastify.io/). It features a structured, domain-driven architecture and includes JWT-based authentication.

## Features

*   **Fastify Framework**: Built for speed and low overhead.
*   **Structured Architecture**: Organized into `controllers`, `services`, `repositories`, and `routes`.
*   **ES Modules**: Uses modern `import`/`export` syntax.
*   **Path Aliasing**: Uses `@/` to reference the `src` directory for cleaner imports.
*   **JWT Authentication**: Secure your endpoints with JSON Web Tokens.
*   **Example Domain**: Includes a sample "items" domain to demonstrate the structure.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or later recommended)
*   [npm](https://www.npmjs.com/)

## Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd baliga-backend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the development server, run:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Authentication

*   **Register a new user**
    *   **URL**: `/api/auth/register`
    *   **Method**: `POST`
    *   **Body**:
        ```json
        {
          "username": "testuser",
          "password": "password123"
        }
        ```

*   **Login to get a JWT**
    *   **URL**: `/api/auth/login`
    *   **Method**: `POST`
    *   **Body**:
        ```json
        {
          "username": "testuser",
          "password": "password123"
        }
        ```

### Items (Protected)

To access these endpoints, you must include the JWT in the `Authorization` header:

`Authorization: Bearer <your-jwt-token>`

*   **Get all items**
    *   **URL**: `/api/items`
    *   **Method**: `GET`

*   **Get a single item by ID**
    *   **URL**: `/api/items/:id`
    *   **Method**: `GET`

## Security Note

For security, the JWT secret key in `src/services/authService.js` is currently a placeholder (`'your-secret-key'`). It is strongly recommended to replace this with a strong, unique secret stored in an environment variable (e.g., in a `.env` file).
