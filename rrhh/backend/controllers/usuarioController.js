const { Sequelize, sequelize } = require("../models");
const db = require("../models");

const Usuario = db.usuarios;
const NotaFinal = db.notaFinal;
const Materias = db.materias;

const getAllUsuarios = async (req, res) => {
  let usuarios = await Usuario.findAll({
    attributes: ["id", "nombre", "apellido", "carrera"],
    where: {
      rol: "ROLE_ESTUDIANTE",
    },
  });

  let newUsuarios = await Promise.all(
    usuarios.map(async (usuario) => {
      let notasFinales = await NotaFinal.findAll({
        attributes: ["nota_final"],
        where: {
          usuario_id: usuario.id,
        },
      });
      //calculates average
      let promedio = notasFinales.reduce((a, b) => a + b.nota_final, 0);
      promedio = promedio / notasFinales.length;

      let cantidadDeMaterias = await Materias.count({
        where: {
          carrera: usuario.carrera,
        },
      });
      let porcentajeDeCarrera =
        (notasFinales.length * 100) / cantidadDeMaterias;

      let user = {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        carrera: usuario.carrera,
        promedio: promedio,
        porcentajeDeCarrera: porcentajeDeCarrera,
      };
      return user;
    })
  );

  console.log(newUsuarios);

  res.status(200).send(newUsuarios);
};

module.exports = {
  getAllUsuarios,
};
