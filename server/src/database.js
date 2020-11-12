import { Sequelize } from "sequelize";

const { DB_URL } = process.env;

const db = DB_URL ? new Sequelize(DB_URL) : new Sequelize("sqlite::memory:");

export default db;
