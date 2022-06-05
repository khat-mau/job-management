const auth = require('./auth');
const user = require('./user');
function route(app) {
    app.use('/api', auth, user);
}

module.exports = route;
