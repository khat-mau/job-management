const mongoose = require('mongoose');

const address = new mongoose.Schema({
    address: String,
});

module.exports = mongoose.model('Address', address);
