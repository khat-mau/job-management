const auth = require('./auth');
const company = require('./company');
const job = require('./job');
const search = require('./search');
const address = require('./address');

function route(app) {
    app.use('/api', auth);
    app.use('/api/companies', company);
    app.use('/api/jobs', job);
    app.use('/api/search', search);
    app.use('/api/address', address);
}

module.exports = route;
