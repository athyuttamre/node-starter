import db from "../database.js";
import "./user.js";

if (process.env.NODE_ENV === "development") {
  db.sync({ force: true });
}
