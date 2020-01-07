const router = require("express").Router();
const controller = require("./controller");
const { checkIfAuthenticated, checkIfHasAdmin, checkIfHasProf, checkIfHasStudent, checkIfHasChef, checkIfHasDelegue} = require("../../middleware/auth");

router.get("/", checkIfHasAdmin, checkIfHasChef, controller.getUsers);
router.get("/:id", checkIfHasAdmin, checkIfHasChef, controller.getUser);
router.post("/", checkIfHasAdmin, checkIfHasChef, controller.addUser)
router.put("/:id", checkIfHasAdmin, checkIfHasChef, controller.updateUser);
router.delete("/:id", checkIfHasAdmin, checkIfHasChef, controller.deleteUser);

module.exports = router;