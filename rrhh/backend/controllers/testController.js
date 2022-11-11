const db = require("../models");
const Test = db.test;

const addTest = async (req, res) => {
  const info = new Test({
    nombre: req.body.nombre,
  });
  try {
    const test = await Test.create(info);
    res.status(200).send(test);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Test.",
    });
  }
};

const getAllTest = async (req, res) => {
  let tests = await Test.findAll({
    where: {
      nombre: "roberto",
    },
  });
  res.status(200).send(tests);
};

const getTestById = async (req, res) => {
  const id = req.params.id;
  let test = await Test.findByPk(id, {
    attributes: ["id", "nombre"],
  });
  res.status(200).send(test);
};

const updateTest = async (req, res) => {
  const id = req.params.id;
  const info = {
    nombre: req.body.nombre,
  };
  let test = await Test.findByPk(id);
  if (!test) {
    res.status(404).send({
      message: "Test not found with id=" + id,
    });
  } else {
    let updatedTest = await Test.update(info, {
      where: { id: id },
    });
    res.status(200).send(updatedTest);
  }
};

module.exports = {
  addTest,
  getAllTest,
  getTestById,
  updateTest,
};
