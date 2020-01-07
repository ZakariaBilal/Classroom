const router = require("express").Router();
const controller = require("./controller");
const { checkIfAuthenticated, checkIfHasAdmin, checkIfHasProf, checkIfHasStudent, checkIfHasChef, checkIfHasDelegue} = require("../../middleware/auth");

router.get("/", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.getTimeTables);
router.get("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.getTable);
router.post("/", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.addTimeTable)
router.put("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.updateTimeTable);
router.delete("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.deleteTimeTable);

module.exports = router;