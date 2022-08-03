const router = require('express').Router();
const adminController = require('../app/controllers/adminController');
const Token = require('../app/controllers/token');

router.post('/requests', Token.verifyleTokenAdmin, adminController.requests);
router.post(
    '/requests/detail',
    Token.verifyleTokenAdmin,
    adminController.viewDetailRequest,
);
router.post(
    '/requests/reject',
    Token.verifyleTokenAdmin,
    adminController.rejectRequest,
);
router.post(
    '/requests/accept',
    Token.verifyleTokenAdmin,
    adminController.acceptRequest,
);

module.exports = router;
