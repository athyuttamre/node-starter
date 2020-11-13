import url from "url";
import path from "path";
import express from "express";
import db from "./database.js";
import "./models/sync.js";

// Environment
const { PORT } = process.env;
const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
const staticDir = path.join(currentDir, "../..", "client", "build");

// Database
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Express
const app = express();

app.get("/api/ping", (_, res) => {
  res.send({ ping: "pong" });
});

app.use(express.static(staticDir));

app.get("/*", (_, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
