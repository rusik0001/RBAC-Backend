const router = require("express").Router();
const userController = require("../controllers/users.cotroller");

router.post("/users", userController.addUser)

router.get("/users", userController.getUsers)

module.exports = router;