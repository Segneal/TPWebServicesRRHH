module.exports = (sequelize, DataTypes) => {
  const Materias = sequelize.define("materias", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
    },
    año_cuatrimestre: {
      type: DataTypes.STRING,
    },
    año_materia: {
      type: DataTypes.INTEGER,
    },
    carrera: {
      type: DataTypes.STRING,
    },
    cuatrimestre: {
      type: DataTypes.INTEGER,
    },
    dia: {
      type: DataTypes.STRING,
    },
    hora_finalizacion: {
      type: DataTypes.STRING,
    },
    hora_inicio: {
      type: DataTypes.STRING,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    turno: {
      type: DataTypes.STRING,
    },
  });
  return Materias;
};
