const router = require('express').Router();
const jobController = require('../app/controllers/jobController');

router.post('/job/create', jobController.create);
router.get('/find-name', jobController.findByName);
router.get('/find-name/filter', jobController.findByNameAndFilter);

module.exports = router;
