const router = require('express').Router();
const { Router } = require('express');
const jobController = require('../app/controllers/jobController');
const Token = require('../app/controllers/token');

router.post('/job/create', jobController.create);
router.get('/find-name', jobController.findByName);
router.get('/find-name/filter', jobController.findByNameAndFilter);
router.get('/list/:page', jobController.listJob);
router.get('/detailsJob/:jobID', jobController.detailJob);

module.exports = router;
