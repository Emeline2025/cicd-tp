# TP CI/CD

A Node.js application providing a simple greeting service with a REST API. It includes a server built with Express, greeting logic, and comprehensive test
suites (unit, integration, and end-to-end).

## Features

- **Greeting Functionality**: Generates personalized greetings via `src/greeting.js`.
- **REST API Server**: Built with Express in `src/server.js`, supporting GET and POST endpoints for greetings.
- **Testing**: Full test coverage with Jest:
  - Unit tests in `tests/unit/greeting.test.js`.
  - Integration tests in `tests/integration/app.test.js`.
  - End-to-end tests in `tests/e2e/e2e.test.js`.
- **Linting**: Configured with ESLint (via `.eslintrc.js` and `.eslintignore`).
- **Node.js Version Management**: Uses `.nvmrc` to specify Node.js v22.19.0.

## Prerequisites

- Node.js ≥22.19.0 (use `.nvmrc` with nvm: `nvm use`).
- npm (included with Node.js).

## Installation

1. Fork the repository:
2. Install dependencies:

```bash
npm install
```

## Configuration

### Environment Variables
The project uses the following environment variables (defined in `.env`):

| Variable      | Description                          | Default Value           |
|---------------|--------------------------------------|-------------------------|
| `PORT`        | Server Port                          | 3000                    |
| `NODE_ENV`    | Environment (dev/prod/test)          | development             |
| `LOG_LEVEL`   | Logging Level (info/error/debug)     | info                    |


## Usage

Start the server:

```
npm start
```

The server runs on port 3000 (or `process.env.PORT`). Endpoints:

- `GET /hello/:name?`: Returns a greeting (e.g., "Hello world!" or "Hello world! From [name]").
- `POST /hello`: Expects `x-name` header for the name.

## Testing

Run tests with Jest:

- All tests: `npm test`
- Unit tests: `npm test -- tests/unit/`
- Integration tests: `npm test -- tests/integration/`
- E2E tests: `npm test -- tests/e2e/`

## Linting

The project uses ESLint to maintain high code quality.

### Configuration
- Configuration file : `.eslintrc.js`
- Main rules :
  - `no-unused-vars`: Warns about unused variables
  - `prefer-const`: Forces the use of `const` whenever possible
  - `eqeqeq`: Forces the use of `===` instead of `==`

### Usage
```bash
# Check the code
npm run lint

# Automatically fix problems
npm run lint:fix
Check code quality:

```


## Error Handling

The project uses a centralized error middleware to handle errors consistently. Errors are returned in JSON format with a status code and a descriptive message.

### Example error response:
```json
{
  "error": {
    "message": "Internal Server Error",
    "status": 500
  }
}
```

Error Types :
• 400 Bad Request: Invalid request.
• 404 Not Found: Route does not exist.
• 405 Method Not Allowed: HTTP method not supported.
• 500 Internal Server Error: Server error.

 Execute the tests :

```
npm test
```


## Project Structure

- `src/greeting.js`: Core greeting logic.
- `src/server.js`: Express server setup.
- `tests/`: Test suites (unit, integration, e2e).
- `.eslintrc.js`: ESLint configuration.
- `.eslintignore`: Files/directories excluded from linting.
- `.nvmrc`: Node.js version specification.
- `package.json`: Project metadata, dependencies, and scripts.

## Dependencies

- **Runtime**: Express (web server), Axios (HTTP client), Supertest (testing utility).
- **Dev**: ESLint (linting), Jest (testing).

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Run tests and linting.
4. Submit a pull request.


