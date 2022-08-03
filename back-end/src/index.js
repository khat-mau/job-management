const express = require('express');

const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const route = require('./routes');
const cors = require('cors');
dotenv.config();

//CONNECT DATABASE
const db = require('./config/db');
db.connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(cookieParser());
app.use(morgan('common'));
app.use(
    express.json({
        limit: '50mb',
    }),
);
app.use(express.urlencoded({ extended: true }));
route(app);
app.listen(8000, () => {
    console.log('Server is running...');
    console.log('localhost:' + 8000);
});
