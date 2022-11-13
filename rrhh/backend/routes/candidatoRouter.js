const candidatoController = require("../controllers/candidatoController");
const router = require("express").Router();

router.get("/getAllCandidatos", candidatoController.getAllCandidatos);
router.post("/createCandidato", candidatoController.createCandidato);
router.put("/updateCandidato/:idUsuario", candidatoController.updateCandidato);

module.exports = router;
