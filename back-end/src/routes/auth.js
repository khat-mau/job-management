const router = require('express').Router();

const registerController = require('../app/controllers/registerController');
const loginController = require('../app/controllers/loginController');
const logoutController = require('../app/controllers/logoutController');
const refreshTokenController = require('../app/controllers/refreshTokenController');

router.post('/register', registerController.create);
router.post('/login', loginController.login);
router.post('/logout', logoutController.logout);
router.post('/refresh', refreshTokenController.requestRefreshToken);

module.exports = router;
