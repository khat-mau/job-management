const router = require('express').Router();
const jobController = require('../app/controllers/jobController');

router.post('/create', jobController.create);

module.exports = router;
