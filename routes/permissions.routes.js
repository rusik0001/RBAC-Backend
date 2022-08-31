const router = require("express").Router();
const permissionController = require("../controllers/permissions.controller")

router.post("/permissions", permissionController.addPermission)

router.get("/permissions", permissionController.getPermissions)

router.delete("/permissions/:pid", permissionController.deletePermission)

module.exports = router;