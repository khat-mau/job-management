const router = require('express').Router();
const Address = require('../app/models/Address');

router.get('/', async (req, res) => {
    try {
        const data = await Address.find({}).sort({ name: 1 });
        res.status(200).json({ errorStatus: false, data });
    } catch (e) {
        res.status(500).json({ errorStatus: true, message: e.message });
    }
});

module.exports = router;
