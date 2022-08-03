const bcrypt = require('bcrypt');
const User = require('../models/User');
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const hbs = require('nodemailer-express-handlebars');
const path = require('path')
const Token = require('./token');

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

    async listUsers(req, res){
        try {

            let perpage = 6;
            let page = req.params.page || 1;
            let listUsers;
            let listUsersWasFilter;
            const promises1 = new Promise(resolve => resolve(User.countDocuments({})));
            const promises2 = new Promise(resolve => resolve(User.find().skip((perpage * page) - perpage).limit(perpage)));
            await Promise.all([promises1, promises2]).then(([result1, result2]) => { listUsers = result1; listUsersWasFilter = result2; });
            const toltalPage = listUsers % perpage === 0 ? listUsers / perpage : parseInt(listUsers / perpage) + 1;
            res.status(200).json({ errorStatus: false, data: { page, toltalPage, listUsersWasFilter } });
            // const user = await User.find();
            // res.status(200).json({ user: user });

        } catch (e) { res.status(500).json({ errorStatus: true, err: e.message }); }
        
    }

    async sendMail(req, res) {
        try {
            // setup mailOptions to send email user
            const __dirname = path.resolve();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "jobsharingvn24h@gmail.com", // generated ethereal user
                    pass: "ssddkctvgkszhvzb", // generated ethereal password
                }
            });

            // connect to handlebars
            const handlebarOptions = {
                viewEngine: {
                    extName: ".handlebars",
                    partialsDir: path.resolve('./src/views/'),
                    defaultLayout: false,
                },
                viewPath: path.resolve('./src/views/'),
                extName: ".handlebars",
            };
            transporter.use('compile', hbs(handlebarOptions));

            // nhập email
            let emails, accessToken;

            const checkEmail = await User.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {                        
                        return res.status(422).json({ errorStatus:true,error: "User dont exists with that email "});
                    }
                    accessToken = Token.generateAccessTokenEmail(req.body.emails);
                    user.resetToken = accessToken
                    user.expireToken = Date.now() + 3600000
                    user.save().then((result) => {
                        emails = req.body.email;

                        // gui email
                        const mailOptions = {
                            from: 'jobsharingvn24h@gmail.com',
                            to: emails,
                            subject: 'Test boilerplate for sending emails',
                            template: 'sample',
                            context: {
                                forgotPasswordURL: "http://localhost:8000/api/resetPassword/" + accessToken

                            }
                        }
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) {
                                console.log(err.message);
                                res.status(404).json({ errorStatus: true, message: err.message });
                            } else {
                                res.status(200).json({ errorStatus: false, message: 'Email sent ' + emails, accessToken: accessToken });
                                console.log(emails);
                            }
                        })
                        console.log(emails);
                    });
                });

        } catch (e) { res.status(500).json({ errorStatus: true, err: e.message }); }
    }

    async checkToken(req, res, next) {
        try {
            const sentToken = req.params.token;
            User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
                .then(user => {
                    if (user == null) {
                        res.status(403).json({ errorStatus: true, message: "password reset link is invalid or has expired." });
                    }
                    else {
                        user.updateOne({ $set: { isVerifyToken: true } })
                            .then(result => {
                                res.sendFile(path.join(__dirname + '/index.html'), sentToken);
                            })
                    }
                })
        } catch (e) { res.status(500).json({ errorStatus: true, err: e.message }); }
    }

    async resetPassword(req, res, next) {
        try {
            const token = req.params.token;
            const newPassword = req.body.password;
            const confirmNewPassword = req.body.confirmPassword;
            if (newPassword === confirmNewPassword) {
                User.findOne({ resetToken: token, expireToken: { $gt: Date.now()}, isVerifyToken: true })
                    .then(user => {
                        if (user != null) {
                            bcrypt.hash(newPassword, 12).then(hashedpassword => {
                                user.password = hashedpassword,
                                    user.resetToken = undefined,
                                    user.expireToken = undefined,
                                    user.isVerifyToken = undefined,
                                user.save().then((saveduser) => {
                                    res.status(200).json({ errorStatus: false, message: "password updated success" })
                                })
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ errorStatus: true, err: e.message });
                    })
            }
            else {
                res.status(404).json({ errorStatus: true, message: "password and confirmNewPassword are not the same" });
            }
        } catch (e) { res.status(500).json({ errorStatus: true, err: e.message }); }
    }
}

module.exports = new registerController();