const router = require('express').Router();
const uploadController = require('../app/controllers/uploadController');

router.post('/image', uploadController.image);

module.exports = router;

