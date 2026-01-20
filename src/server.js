const express = require("express");
const { getGreeting } = require("./greeting");
const errorHandler = require("./middlewares/errorHandler"); // Import du middleware

const app = express();
const PORT = process.env.PORT || 3000;

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
  res.status(405).send("Method Not Allowed");
});

// Middleware pour les routes inexistantes (404)
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Middleware d'erreur centralisé (doit être le dernier middleware)
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
