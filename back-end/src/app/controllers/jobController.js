const { json } = require('body-parser');
const { Job, Company } = require('../models/Company');
const { Comments, Rates } = require('../models/Features');
const User = require('../models/User');

class jobController {
    async create(req, res) {
        try {
            const data = { ...req.body };
            data.status = 'hide';
            const newJob = new Job(data);
            const saveJob = await newJob.save();
            if (data.company) {
                const company = Company.findById(data.company); // query ra company dựa theo id mà req gửi lên
                await company.updateOne({ $push: { jobs: saveJob._id } }); // sau khi query ra company thì push vào company đó thêm 1 job, mỗi company đều có mục jobs là 1 mảng..
            }
            res.status(200).json({
                errorStatus: false,
                message: 'Create job successfully',
            });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: 'Create job failed',
                e,
            });
        }
    }

    async findByName(req, res) {
        try {
            const data = await Job.find({
                name: {
                    $regex: req.query.name, // search with includes
                    $options: 'i', // without distinction case
                },
            });
            res.status(200).json({ errorStatus: false, data: { jobs: data } });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: 'Find jobs by name failed',
                'error message': e.message,
            });
        }
    }

    async findByNameAndFilter(req, res) {
        try {
            const data = await Job.find({
                name: {
                    $regex: req.query.name, // search with includes
                    $options: 'i', // without distinction case
                },
                location: {
                    $regex: req.query.filter, // search with includes
                    $options: 'i', // without distinction case
                },
            });
            res.status(200).json({ errorStatus: false, data: { jobs: data } });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: 'Find jobs by name failed',
                'error message': e.message,
            });
        }
    }
    async listJob(req, res) {
        try {
            let perpage = 6;
            let page = req.params.page || 1;
            let listJob;
            let listJobWasFilter;
            const promises1 = new Promise(resolve => resolve(Job.countDocuments({})));
            const promises2 = new Promise(resolve => resolve(Job.find().skip((perpage * page) - perpage).limit(perpage)));
            await Promise.all([promises1, promises2]).then(([result1, result2]) => { listJob = result1; listJobWasFilter = result2; });
            const toltalPage = listJob % perpage === 0 ? listJob / perpage : parseInt(listJob / perpage) + 1;
            res.status(200).json({ errorStatus: false, data: { page, toltalPage, listJobWasFilter } });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: 'find job failed',
                e,
            });
        }
    }

    async inforJob(req, res) {
        try {
            const userID = req.body.userID;
            const jobID = req.params.jobID;
            const comment = req.body.comment;
            const job = await Job.findById(jobID);
            if (job) {
                if (comment) {
                    const newComment = new Comments({ details: comment, userID: userID, jobID: jobID });
                    const SaveComment = await newComment.save()
                    if (User.findById(userID)) {
                        await job.updateOne({ $push: { comment: SaveComment._id } });
                    }
                    else {
                        req.status(404).json({ errorStatus: true, message: 'can not find user' });
                    }
                }
                const ListComment = await Comments.find(jobID);
                req.status(200).json({ errorStatus: false, JOB: job, Comments: ListComment });
            } else if (!job) {
                req.status(404).json({ errorStatus: true, message: 'can not find job' });
            }
        } catch (e) {
            res.status(500).json({ errorStatus: true, message: 'find job failed: ' + e.message, });
        }
    }

}

module.exports = new jobController();
