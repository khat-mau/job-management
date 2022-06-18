const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Token = require('./token');

class loginController {
    async login(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Incorrect username or password!' });
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );
            if (!validPassword) {
                return res
                    .status(404)
                    .json({ message: 'Incorrect username or password!' });
            }

            if (user && validPassword) {
                const accessToken = Token.generateAccessToken(user);
                const { password, ...other } = user._doc;
                res.status(200).json({ ...other, accessToken });
            }
        } catch (e) {
            res.status(500).json({ e });
            console.log(e.message);
        }
    }
}
module.exports = new loginController();
