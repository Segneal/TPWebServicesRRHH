const { sequelize, Sequelize } = require("../models");
const db = require("../models");
const Candidato = db.candidato;
const Usuario = db.usuarios;

const getAllCandidatos = async (req, res) => {
  let candidatos = await Candidato.findAll({
    attributes: ["id", "usuarioId", "estado"],
  });
  return res.status(200).send(candidatos);
};

const updateCandidato = async (req, res) => {
  const { usuarioId } = req.params;
  const { estado } = req.body;
  const candidato = await Candidato.findOne({
    where: {
      usuarioId: usuarioId,
    },
  });
  if (candidato) {
    await Candidato.update(
      {
        estado: estado,
      },
      {
        where: {
          usuarioId: usuarioId,
        },
      }
    );
    return res.status(200).send("Candidato actualizado");
  }
  return res.status(404).send("Candidato no encontrado");
};

const createCandidato = async (req, res) => {
  console.log(req.body);
  const { usuarioId } = req.body;
  const candidato = await Candidato.findOne({
    where: {
      usuarioId: usuarioId,
    },
  });
  if (candidato) {
    return res.status(409).send("El usuario ya es candidato");
  }
  Candidato.create({
    usuarioId: usuarioId,
    estado: req.body.estado,
  });
};

const deleteCandidato = async (req, res) => {
  const { usuarioId } = req.params;
  const candidato = await Candidato.findOne({
    where: {
      usuarioId: usuarioId,
    },
  });
  if (candidato) {
    await Candidato.destroy({
      where: {
        usuarioId: usuarioId,
      },
    });
    return res.status(200).send("Candidato eliminado");
  }
  return res.status(404).send("Candidato no encontrado");
};

const getCandidato = async (req, res) => {
  const { usuarioId } = req.params;
  const candidato = await Candidato.findOne({
    where: {
      usuarioId: usuarioId,
    },
  });
  if (candidato) {
    return res.status(200).send(candidato);
  }
  return res.status(404).send("Candidato no encontrado");
};

module.exports = {
  getAllCandidatos,
  updateCandidato,
  createCandidato,
  deleteCandidato,
  getCandidato,
};
