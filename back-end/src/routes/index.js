const auth = require('./auth');
const company = require('./company');
const job = require('./job');
const search = require('./search');
const address = require('./address');
const upload = require('./upload');
const homePage = require('./homePage');
const admin = require('./admin');
const features = require('./feature');

function route(app) {
    app.use('/api/HomePage', homePage);
    app.use('/api', auth);
    app.use('/api/companies', company);
    app.use('/api/jobs', job);
    app.use('/api/search', search);
    app.use('/api/address', address);
    app.use('/api/upload', upload);
    app.use('/api/admin', admin);
    app.use('/api/features', features);
}

module.exports = route;
