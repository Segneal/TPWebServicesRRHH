module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "test",
    {
      nombre: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Test;
};
