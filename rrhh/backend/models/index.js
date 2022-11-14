const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require("./usuarioModel.js")(sequelize, DataTypes);
db.notaFinal = require("./notaFinalModel.js")(sequelize, DataTypes);
db.materias = require("./materiasModel.js")(sequelize, DataTypes);
db.candidato = require("./candidatoModel.js")(sequelize, DataTypes);

db.usuarios.hasMany(db.notaFinal, {
  foreignKey: "usuario_id",
  as: "notasFinales",
});

db.usuarios.hasOne(db.candidato, {
  foreignKey: "idUsuario",
});

db.candidato.belongsTo(db.usuarios, {
  foreignKey: "idUsuario",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;
