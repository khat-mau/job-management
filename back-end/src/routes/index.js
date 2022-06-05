const auth = require('./auth');

function route(app) {
    app.use('/api', auth);
}

module.exports = route;
