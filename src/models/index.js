import Sequelize from "sequelize";
import config from "config";
const connection = config.get("db");
const sequelize = new Sequelize(connection.databaseName, connection.databaseUser,connection.databasePassword, {
  host: connection.host,
  dialect:connection.dialect,
});

const db = {
  User: require("./user")(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
