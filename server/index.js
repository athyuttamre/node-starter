import express from "express";

// Environment
const { PORT } = process.env;

// Express
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
