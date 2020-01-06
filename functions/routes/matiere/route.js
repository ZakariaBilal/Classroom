const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getMatieres);
router.get("/:id", controller.getMatiere);
router.post("/", controller.addMatiere);
router.put("/:id", controller.updateMatiere);
router.delete("/:id", controller.deleteMatiere);

module.exports = router;
