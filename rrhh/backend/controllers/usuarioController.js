const db = require("../models");

const Usuario = db.usuarios;

const addUsuario = async (req, res) => {
  const info = new Usuario({
    nombre: req.body.nombre,
  });
  try {
    const usuario = await Usuario.create(info);
    res.status(200).send(usuario);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Usuario.",
    });
  }
};

const getAllUsuarios = async (req, res) => {
  let usuarios = await Usuario.findAll({
    attributes: ["id", "nombre", "apellido"],
  });
  res.status(200).send(usuarios);
};

const getUsuarioById = async (req, res) => {
  const id = req.params.id;
  let usuario = await Usuario.findByPk(id, {
    attributes: ["id", "nombre", "apellido"],
  });
  res.status(200).send(usuario);
};

const updateUsuario = async (req, res) => {
  const id = req.params.id;
  const info = {
    nombre: req.body.nombre,
  };
  let usuario = await Usuario.findByPk(id);
  if (!usuario) {
    res.status(404).send({
      message: "Usuario not found with id=" + id,
    });
  } else {
    let updatedUsuario = await Usuario.update(info, {
      where: { id: id },
    });
    res.status(200).send(updatedUsuario);
  }
};

module.exports = {
  addUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
};
