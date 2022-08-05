const router = require('express').Router();
const featuresController = require('../app/controllers/featuresController');
const Token = require('../app/controllers/token');

router.post('/rate/submit', Token.verifyToken, featuresController.submitRate);

module.exports = router;
