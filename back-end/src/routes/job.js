const router = require('express').Router();
const jobController = require('../app/controllers/jobController');

router.post('/create', jobController.create);
router.get('/list/:page', jobController.listJob);
module.exports = router;
