const router = require("express").Router();
const controller = require("./controller");
const { checkIfAuthenticated, checkIfHasAdmin, checkIfHasProf, checkIfHasStudent, checkIfHasChef, checkIfHasDelegue} = require("../../middleware/auth");

router.get("/", checkIfAuthenticated, checkIfHasAdmin, controller.getMeetings);
router.get("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.getMeeting);
router.post("/", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.addMeeting)
router.put("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.updateMeeting);
router.delete("/:id", checkIfAuthenticated, checkIfHasAdmin, checkIfHasChef, controller.deleteMeeting);

module.exports = router;