const router = require('express').Router();
const companyController = require('../app/controllers/companyController');
const Token = require('../app/controllers/token');

router.post('/company/create', companyController.create);
// router.post('/company/jobs/', companyController.showInCompany);

router.get('/list/:page', companyController.listCompany);
module.exports = router;
