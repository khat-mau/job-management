const registerRouter = require('./auth');

function route(app) {
    app.use('/api', registerRouter);
}

module.exports = route;
