const router = require('express').Router();
const companyController = require('../app/controllers/companyController');
const Token = require('../app/controllers/token');

router.post('/', companyController.listMyCompany);
router.post('/company/create', Token.verifyToken, companyController.create);
// router.post('/company/jobs/', companyController.showInCompany);

router.get('/list/:page', companyController.listCompany);
module.exports = router;
