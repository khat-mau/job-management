const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
    //Register
    registerUser: async (req, res) => {
        // try {
        //     const salt = await bcrypt.genSalt(10);
        //     const hashed = await bcrypt.hash(req.body.password, salt)
        //     //Create new user
        //     const newUser = await new User({
        //         firstName: req.body.firstName,
        //         lastName: req.body.lastName,
        //         email: req.body.email,
        //         phone: req.body.phone,
        //         userName: req.body.userName,
        //         password: hashed
        //     })
        //     //Save DB
        //     const user = await newUser.save();
        //     res.status(200).json(user);
        // } catch (error) {
        //     res.status(500).json(err);
        // }
         res.status(200).json(req.body)
    },
}

module.exports = authController;