const router = require('express').Router();
const registerController = require('../app/controllers/authController');

router.post('/register', registerController.create);

module.exports = router;
