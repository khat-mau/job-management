const express = require('express')
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express()

const authRouter = require("./routes/auth")

dotenv.config();

//CONNECT DATABASE
const db = require("./config/db");
db.connect();
app.use(express.json());

app.use(bodyParser.json({limit:"50mb"}));
app.use(morgan("common"));

//Router
app.use("/api", authRouter);

app.listen(8000, () => {
    console.log("Server is running...");
  });