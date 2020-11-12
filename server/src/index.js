import express from "express";
import db from "./database.js";
import "./models/sync.js";

// Environment
const { PORT } = process.env;

// Database
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Express
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
