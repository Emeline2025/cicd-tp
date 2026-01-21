/**
 * Middleware d'erreur centralisé
 * @param {Error} err - L'erreur
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @param {Function} next - Fonction next d'Express
 */
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log l'erreur pour le débogage

  // Détermine le code de statut et le message en fonction du type d'erreur
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 && process.env.NODE_ENV === "production"
    ? "Internal Server Error"
    : err.message;

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      ...(process.env.NODE_ENV !== "production" && { stack: err.stack }) // Stack trace seulement en dev
    }
  });
}

module.exports = errorHandler;