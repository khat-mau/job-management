const router = require('express').Router();
const companyController = require('../app/controllers/companyController');
const Token = require('../app/controllers/token');

router.post('/create', companyController.create);

router.get('/list/:page', companyController.listCompany);
module.exports = router;
