const router = require("express").Router();
const userroleController = require("../controllers/userrole.controller")

router.post("/userrole", userroleController.addUserRole)

router.post("/userroles", userroleController.addUserRoles)

router.get("/userrole", userroleController.getUserRoles)

router.delete("/userrole/:urid", userroleController.deleteUserRole)

module.exports = router;