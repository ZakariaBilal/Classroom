const router = require("express").Router();
const controller = require("./controller");
const { checkIfAuthenticated, checkIfHasAdmin, checkIfHasProf, checkIfHasStudent, checkIfHasChef, checkIfHasDelegue} = require("../../middleware/auth");


router.get("/", controller.getEvents);
router.get("/:id", controller.getEvent);
router.post("/", controller.addEvent)
router.put("/:id", controller.updateEvent);
router.delete("/:id", controller.deleteEvent);

module.exports = router;
