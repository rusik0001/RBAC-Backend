const router = require("express").Router();
const roleController = require("../controllers/roles.controller")

router.post("/roles", roleController.addRole)

router.get("/roles", roleController.getRoles)

router.delete("/roles/:rid", roleController.deleteRole)

module.exports = router;