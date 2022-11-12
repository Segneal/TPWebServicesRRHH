module.exports = (sequelize, DataTypes) => {
  const NotaFinal = sequelize.define("notas_finales", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    aprobado: {
      type: DataTypes.BOOLEAN,
    },
    inscripto: {
      type: DataTypes.BOOLEAN,
    },
    nota_examen: {
      type: DataTypes.INTEGER,
    },
    nota_final: {
      type: DataTypes.INTEGER,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
    },
    mesa_examen_id: {
      type: DataTypes.INTEGER,
    },
  });
  return NotaFinal;
};
