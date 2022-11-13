const db = require("../models");
const Candidato = db.candidato;
const Usuario = db.usuario;

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
    idUsuario: {
      type: DataTypes.BIGINT,
    },
  });

  return Candidato;
};
