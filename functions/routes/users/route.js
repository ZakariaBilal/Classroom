const router = require("express").Router();
const controller = require("./controller");

router.get("/test/", controller.getUsers);
router.get("/test/:id", controller.getUser);
router.post("/test/", controller.addUser);
router.put("/test/:id", controller.updateUser);
router.delete("/test/:id", controller.deleteUser);

const {
  checkIfAuthenticated,
  checkIfHasProf,
  checkIfHasStudent,
  checkIfHasChef,
  checkIfHasDelegue
} = require("../../middleware/auth");

router.get("/", checkIfHasChef, controller.getUsers);
router.get("/:id", checkIfHasChef, controller.getUser);
router.post("/", checkIfHasChef, controller.addUser);
router.put("/:id", checkIfHasChef, controller.updateUser);
router.delete("/:id", checkIfHasChef, controller.deleteUser);

module.exports = router;
