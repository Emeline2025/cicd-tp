const express = require("express");
const { getGreeting } = require("./greeting");
const errorHandler = require("./middlewares/errorHandler"); // Import du middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON (utile pour les requêtes POST)
app.use(express.json());

app.get("/hello/:name?", (req, res) => {
  const name = req.params.name;

  res.send(getGreeting(name));
});

app.post("/hello", (req, res) => {
  const name = req.headers["x-name"];

  res.send(getGreeting(name));
});

// Middleware pour les méthodes non autorisées
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  if (!req.route) {
    return next();
  }
  // Transmet l'erreur au middleware errorHandler
  const err = new Error("Method Not Allowed");
  err.statusCode = 405;
  next(err);
});

// Middleware 404 (remplace res.send par next())
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);  // Passe l'erreur à errorHandler
});

// Middleware d'erreur centralisé (doit être le dernier middleware)
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
