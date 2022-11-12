const db = require("../models");
const Candidato = db.candidato;

module.exports = (sequelize, DataTypes) => {
  const Candidato = sequelize.define("candidato", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
    },
    usuarioId: {
      type: DataTypes.BIGINT,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
  });

  return Candidato;
};
