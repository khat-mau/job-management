const bcrypt = require('bcrypt');
const User = require('../models/User');

class registerController {
    async create(req, res) {
        try {
            // const firstName = req.body.firstName;
            // const lastName = req.body.lastName;
            // const username = req.body.username;
            // const email = req.body.email;
            // const phone = req.body.phone;
            // const password = req.body.password;
            // const confirmPassword = req.body.confirmPassword;

            let check = true;
            let dataError = {};
            if (!(req.body.password === req.body.confirmPassword)) {
                //check password and confirm password
                check = false;
                dataError.errorMessage = dataError.errorMessage
                    ? typeof dataError.errorMessage === 'object'
                        ? [
                              ...dataError.errorMessage,
                              'password and confirm password do not match',
                          ]
                        : [
                              dataError.errorMessage,
                              'password and confirm password do not match',
                          ]
                    : 'password and confirm password do not match';
            }
            const data = { ...req.body };
            delete data.confirmPassword;
            const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!data.email.match(mailFormat)) {
                check = false;
                dataError.errorMessage = dataError.errorMessage
                    ? typeof dataError.errorMessage === 'object'
                        ? [...dataError.errorMessage, 'invalid email format']
                        : [dataError.errorMessage, 'invalid email format']
                    : 'invalid email format';
            }

            if (data.password.length < 6 || data.password.length > 20) {
                check = false;
                dataError.errorMessage = dataError.errorMessage
                    ? typeof dataError.errorMessage === 'object'
                        ? [
                              ...dataError.errorMessage,
                              'password not in [6,20] characters',
                          ]
                        : [
                              dataError.errorMessage,
                              'password not in [6,20] characters',
                          ]
                    : 'password not in [6,20] characters';
            }

            //check duplicate username and email
            const username = await User.findOne({ username: data.username });
            const email = await User.findOne({ email: data.email });
            if (username) {
                check = false;
                dataError.errorMessage = dataError.errorMessage
                    ? typeof dataError.errorMessage === 'object'
                        ? [
                              ...dataError.errorMessage,
                              'this username is already in use',
                          ]
                        : [
                              dataError.errorMessage,
                              'this username is already in use',
                          ]
                    : 'this username is already in use';
            }
            if (email) {
                check = false;
                dataError.errorMessage = dataError.errorMessage
                    ? typeof dataError.errorMessage === 'object'
                        ? [
                              ...dataError.errorMessage,
                              'this email is already in',
                          ]
                        : [dataError.errorMessage, 'this email is already in']
                    : 'this email is already in';
            }

            if (check) {
                const salt = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(data.password, salt);
                const user = await new User({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    username: data.username,
                    password: hashed,
                });
                user.save().then(() => {
                    res.status(200).json({
                        message: 'register successful!',
                    });
                });
            } else {
                res.status(404).json({ dataError });
            }
        } catch (e) {
            res.status(500).json({ e });
        }
    }
}

module.exports = new registerController();

