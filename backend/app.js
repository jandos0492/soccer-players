const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const { environment } = require("./config");
const isProduction = environment === "production";

// Initialize the Express app
const app = express();

// Middleware
app.use(morgan("dev")); // HTTP request logger
app.use(cookieParser()); // Parse cookies in requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

if (!isProduction) {
  app.use(cors()); // Enable CORS in development
}

app.use(helmet({
  contentSecurityPolicy: false
})); // Set various security-related headers

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory

// Example route
const router = express.Router();
router.get("/hello", (req, res) => {
  res.send("<h1>Test passed</h1>");
});

app.use(router); // Mount the router to the app

// Error Handling Middleware
app.use((_req, _res, next) => {
  const err = new Error("The requested resource was not found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource was not found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((error) => error.message);
    err.title = "Validation Error";
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});



module.exports = app;