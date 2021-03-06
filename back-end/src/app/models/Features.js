const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const comment = new mongoose.Schema({
    details: {
        type: String,
        maxLength: 600,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

comment.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

const rate = new mongoose.Schema({
    value: {
        type: Number, // [1,5]
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const cv = new mongoose.Schema({
    data: {
        type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const report = new mongoose.Schema({
    data: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const _Comment = mongoose.model('comment', comment);
const _Rate = mongoose.model('rate', rate);
const _Cv = mongoose.model('cv', cv);
const _Report = mongoose.model('report', report);

module.exports = { _Comment, _Rate, _Cv, _Report };
