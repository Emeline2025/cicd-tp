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
  const message = statusCode === 500 ? 'Internal Server Error' : err.message;

  res.status(statusCode).json({
    error: {
      message: message,
      status: statusCode
    }
  });
}

module.exports = errorHandler;