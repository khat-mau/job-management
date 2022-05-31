const authController = require("../app/controllers/authController");

const router = require("express").Router();

//Register
router.post("/register", authController.registerUser);
module.exports = router;