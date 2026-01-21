module.exports = {
  // Configuration de base pour Jest
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/server.js", // Exclut le fichier principal si nécessaire
  ],

  // Configuration pour Allure
  reporters: [
    "default",
    ["jest-allure", {
      resultsDir: "./allure-results",
    }]
  ],

  // Continue même si un test échoue
  bail: false,

  // Options de couverture
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};