const router = require('express').Router();
const searchController = require('../app/controllers/searchController');

router.get('/any', searchController.any);
module.exports = router;
