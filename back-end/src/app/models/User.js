const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String,
        maxLength: 255,
    },
    lastName: {
        type: String,
        maxLength: 255,
    },
    email: {
        type: String,
        unique: true,
        maxLength: 255,
    },
    phone: {
        type: String,
        maxLength: 11,
    },
    username: {
        type: String,
        maxLength: 30,
        unique: true,
    },
    password: {
        type: String,
        min: 6,
        max: 20,
    },
    photo: {
        type: String,
        default: 'https://cdn.tecotecshop.com/assets/img/avatar-author.png',
    },
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],

    rate: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rate' }],

    report: [{ type: mongoose.Schema.Types.ObjectId, ref: 'report' }],

    cv: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cv' }],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    role: { type: String, default: 'user' },

    resetToken:String,
    expireToken:Date,
    isVerifyToken:Boolean,
});

module.exports = mongoose.model('User', user);
