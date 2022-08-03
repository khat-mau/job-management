const router = require('express').Router();
const homePageController = require('../app/controllers/homePageController');

router.get('/:typeList',homePageController.homePage );

module.exports = router;