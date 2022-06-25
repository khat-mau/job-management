const auth = require('./auth');
const company = require('./company');

function route(app) {
    app.use('/api', auth);
    app.use('/api/company', company);
}

module.exports = route;
