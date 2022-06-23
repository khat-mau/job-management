const express = require('express');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const route = require('./routes');
const cors = require('cors');
var bodyParser = require('body-parser');
dotenv.config();

//CONNECT DATABASE
const db = require('./config/db');
db.connect();

app.use(cors());
app.use(cookie());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);
app.listen(8000, () => {
    console.log('Server is running...');
    console.log('localhost:' + 8000);
});
