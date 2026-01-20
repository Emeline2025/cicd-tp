# Project Architecture

## Project Structure

. ├── src/ │   ├── config.js          # Configuration de l'application │   ├── middlewares/       # Middlewares Express │   │   └── errorHandler.js │   ├── greeting.js        # 
Logique métier │   └── server.js          # Configuration du serveur ├── tests/ │   ├── unit/              # Tests unitaires │   ├── integration/       # Tests d'intégration │   └── 
e2e/               # Tests end-to-end ├── .env                   # Variables d'environnement ├── .eslintrc.js           # Configuration ESLint ├── package.json           # Dépendances
et scripts └── README.md              # Documentation principale

## Data Flow

1. **HTTP Request** → 2. **Routing Middleware** → 3. **Controller** → 4. **Business Service** → 5. **HTTP Response**

## Error Handling

1. Errors are captured by the centralized error middleware
2. Errors are logged with `console.error`
3. A standardized JSON response is returned

## Environments

- **Development**: Uses port 3000 by default
- **Production**: Uses the port defined in the environment variables
- **Testing**: Uses a rand