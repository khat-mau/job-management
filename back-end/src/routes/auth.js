const router = require('express').Router();

const registerController = require('../app/controllers/registerController');
const loginController = require('../app/controllers/loginController');
const logoutController = require('../app/controllers/logoutController');
const refreshTokenController = require('../app/controllers/refreshTokenController');
const authController = require('../app/controllers/authController');
router.post('/register', registerController.create);
router.post('/login', loginController.login);
router.post('/logout', logoutController.logout);
router.get('/refresh', refreshTokenController.requestRefreshToken);
router.post('/sendEmail', authController.sendMail);
router.get('/resetPassword/:token', authController.checkToken);
router.post('/updatePasswordViaEmail/:token', authController.resetPassword);
//router.post('/resetPassword/:token', authController.resetPassword);


module.exports = router;
