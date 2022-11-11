module.exports = {
  HOST: "db.cuati96ncsva.sa-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin123",
  DB: "db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
