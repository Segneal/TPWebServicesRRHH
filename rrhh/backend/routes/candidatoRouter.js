const candidatoController = require("../controllers/candidatoController");
const router = require("express").Router();

router.get("/getAllCandidatos", candidatoController.getAllCandidatos);
router.post("/createCandidato", candidatoController.createCandidato);
router.get("/getCandidato/:id", candidatoController.getCandidato);
router.put("/updateCandidato/:id", candidatoController.updateCandidato);
router.delete("/deleteCandidato/:id", candidatoController.deleteCandidato);

module.exports = router;
