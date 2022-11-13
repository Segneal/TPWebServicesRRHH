const { sequelize, Sequelize } = require("../models");
const db = require("../models");
const Candidato = db.candidato;
const Usuario = db.usuarios;

const getAllCandidatos = async (req, res) => {
  let candidatos = await Candidato.findAll({
    include: [
      {
        model: Usuario,
        required: true,
        attributes: ["nombre", "apellido", "carrera"],
      },
    ],
  });
  return res.status(200).send(candidatos);
};

const createCandidato = async (req, res) => {
  console.log(req.body);
  const { idUsuario } = req.body;
  const candidato = await Candidato.findOne({
    where: {
      idUsuario: idUsuario,
    },
  });
  if (candidato) {
    return res.status(409).send("El usuario ya es candidato");
  }
  Candidato.create({
    idUsuario: idUsuario,
    estado: req.body.estado,
  });
};

const updateCandidato = async (req, res) => {
  const { idUsuario } = req.params;
  const { estado } = req.body;
  const candidato = await Candidato.findOne({
    where: {
      idUsuario: idUsuario,
    },
  });
  if (!candidato) {
    return res.status(404).send("El usuario no es candidato");
  }
  candidato.update({
    estado: estado,
  });
  return res.status(200).send("Candidato actualizado");
};

module.exports = {
  getAllCandidatos,
  createCandidato,
  updateCandidato,
};
