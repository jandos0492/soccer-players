module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8081,
  db: {
    username: process.env.DB_USERNAME || "soccer_players_app",
    password: process.env.DB_PASSWORD || "b3b0YwOlIe0Ni04H",
    database: process.env.DB_DATABASE || "soccer_players_db",
    host: process.env.DB_HOST || "localhost",
  },
};