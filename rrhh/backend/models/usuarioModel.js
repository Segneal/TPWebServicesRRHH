const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      activo: {
        type: DataTypes.BOOLEAN,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      carrera: {
        type: DataTypes.STRING,
      },
      contraseña: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      nombre_usuario: {
        type: DataTypes.STRING,
      },
      primer_login: {
        type: DataTypes.BOOLEAN,
      },
      rol: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Usuario;
};
