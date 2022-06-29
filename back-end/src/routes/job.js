const router = require('express').Router();
const jobController = require('../app/controllers/jobController');

router.post('/create', jobController.create);
router.post('/company/jobs/', jobController.showInCompany);

module.exports = router;
