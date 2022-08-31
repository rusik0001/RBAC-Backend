const router = require("express").Router();
const rolepermissionController = require("../controllers/rolepermission.controller")

router.post("/rolepermission", rolepermissionController.addRolePermission)

router.get("/rolepermission", rolepermissionController.getRolePermission)

router.delete("/rolepermission/:rpid", rolepermissionController.deleteRolePermission)

module.exports = router;