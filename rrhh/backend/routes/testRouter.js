const testController = require("../controllers/testController.js");
const router = require("express").Router();
//
router.post("/addTest", testController.addTest);
router.get("/getAllTest", testController.getAllTest);
router.get("/:id", testController.getTestById);
router.put("/:id", testController.updateTest);
//

module.exports = router;
