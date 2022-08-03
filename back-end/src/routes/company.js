const router = require('express').Router();
const companyController = require('../app/controllers/companyController');
const Token = require('../app/controllers/token');

router.post('/', companyController.listMyCompany);
router.post('/company/create', Token.verifyToken, companyController.create);
//router.post('/company/jobs/', companyController.showInCompany);
router.post(
    '/own-company/jobs',
    Token.verifyToken,
    companyController.findJobsInOwnCompany,
);
router.get('/list/:page', companyController.listCompany);

router.put('/company/update', Token.verifyToken, companyController.update);
router.delete('/company/delete', Token.verifyToken, companyController.delete);
router.post(
    '/company/user-status',
    Token.verifyToken,
    companyController.changeShowHideCompany,
);
router.get('/jobs/:id', companyController.listJobFromCompany);

module.exports = router;
