const router = require('express').Router();
const { Router } = require('express');
const jobController = require('../app/controllers/jobController');
const Token = require('../app/controllers/token');

router.delete('/job/delete', Token.verifyToken, jobController.deleteMyJob);
router.post('/job/create', Token.verifyToken, jobController.create);
router.put('/job/update', Token.verifyToken, jobController.update);
router.get('/find-name', jobController.findByName);
router.get('/find-name/filter', jobController.findByNameAndFilter);

router.post(
    '/job/user-status',
    Token.verifyToken,
    jobController.changeShowHideJob,
);

router.get('/list/:page', jobController.listJob);
router.get('/detailsJob/:jobID', jobController.detailJob);

module.exports = router;
