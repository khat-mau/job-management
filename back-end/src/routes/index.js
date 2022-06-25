const auth = require('./auth');
const company = require('./company');
const job = require('./job');

function route(app) {
    app.use('/api', auth);
    app.use('/api/company', company);
    app.use('/api/job', job);
}

module.exports = route;
