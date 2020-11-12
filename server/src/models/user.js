import Sequelize from "sequelize";
import db from "../database.js";

// NOTE: sequelize doesn't support modules yet,
// so we need to dereference exports this way.
const { DataTypes } = Sequelize;

const User = db.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

export default User;
