const router = require('express').Router();
const uploadController = require('../app/controllers/uploadController');
const multiparty = require('connect-multiparty');
const MultipartyMiddleware = multiparty({ uploadDir: 'src/assets/images' });
const Token = require('../app/controllers/token');

router.post(
    '/image',
    //Token.verifyToken,
    MultipartyMiddleware,
    uploadController.image,
);

module.exports = router;

