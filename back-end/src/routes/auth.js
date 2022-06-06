const router = require('express').Router();

const registerController = require('../app/controllers/registerController');
const loginController = require('../app/controllers/loginController');

router.post('/register', registerController.create);
router.post('/login',loginController.login);


module.exports = router;
