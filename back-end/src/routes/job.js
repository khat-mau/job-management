const router = require('express').Router();
const jobController = require('../app/controllers/jobController');
const Token = require('../app/controllers/token');

router.delete('/job/delete', Token.verifyToken, jobController.deleteMyJob);
router.post('/job/create', Token.verifyToken, jobController.create);
router.put('/job/update', Token.verifyToken, jobController.update);
router.get('/find-name', jobController.findByName);
router.get('/find-name/filter', jobController.findByNameAndFilter);

module.exports = router;
