const usuarioController = require("../controllers/usuarioController");
const router = require("express").Router();

router.get("/getAllUsuarios", usuarioController.getAllUsuarios);

module.exports = router;
