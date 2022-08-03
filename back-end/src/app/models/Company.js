const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const company = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    },
    photo: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        maxLength: 255,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        status: { type: Boolean, default: false },
    },
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'job',
        },
    ],
    status: { type: String, default: 'hide' }, //value: [hide, show, ban]
});

const job = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
    },
    name: {
        type: String,
        require: true,
        maxLength: 255,
    },
    photo: {
        type: String,
    },
    categories: {
        type: String,
        require: true,
        maxLength: 255,
    },
    level: {
        type: String,
        require: true,
        maxLength: 255,
    },
    salary: {
        type: String,
    },
    location: {
        type: String,
        require: true,
        maxLength: 255,
    },
    description: {
        type: String,
        maxLength: 600,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
    cvs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cv' }],
    rates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rate' }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'report' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'hide' }, //value: [hide, show, ban]
});

company.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

job.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

const Company = mongoose.model('company', company);
const Job = mongoose.model('job', job);

module.exports = {
    Company,
    Job,
};
