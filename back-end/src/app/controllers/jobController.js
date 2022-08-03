const { json } = require('body-parser');
const { watchFile } = require('fs');
const { Job, Company } = require('../models/Company');
const { cloudinary } = require('../../utils/cloudinary');
class jobController {
    async create(req, res) {
        try {
            const data = { ...req.body };
            const newJob = new Job({
                company: data.companyId,
                name: data.job.jobName,
                categories: data.job.categories,
                level: data.job.level,
                salary: data.job.salary,
                required: data.job.required,
                location: data.job.location,
                description: data.job.description,
                photo: data.job.photo,
                status: 'waiting',
            });
            if (data.companyId) {
                const company = await Company.findById(data.companyId).populate(
                    'jobs',
                ); // query ra company dựa theo id mà req gửi lên
                if (company?.user.toString() !== data?.userId)
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This company not owned for you',
                    });
                let check = false;
                company.jobs.forEach((element) => {
                    if (
                        element.status === 'waiting' ||
                        element.status === 'banned'
                    ) {
                        check = true;
                    }
                });
                if (check) {
                    return res.status(400).json({
                        errorStatus: true,
                        message:
                            'You have at least one job status is waiting or banned',
                    });
                }
                const uploadResponse = await cloudinary.uploader.upload(
                    newJob.photo,
                    {
                        upload_preset: 'rvswxotu',
                    },
                );
                newJob.photo = uploadResponse.url;
                const saveJob = await newJob.save();
                await company.updateOne({ $push: { jobs: saveJob._id } }); // sau khi query ra company thì push vào company đó thêm 1 job, mỗi company đều có mục jobs là 1 mảng..
            }
            return res.status(200).json({
                errorStatus: false,
                message: 'Create job successfully',
            });
        } catch (e) {
            return res.status(500).json({
                errorStatus: true,
                message: e.message,
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

    async deleteMyJob(req, res) {
        try {
            const data = { ...req.body };
            if (data.companyId) {
                const company = await Company.findById(data.companyId);
                if (company?.user.toString() !== data?.userId)
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This company not owned for you',
                    });
                await Job.delete({ _id: data.jobId });
                await company.update({ $pull: { jobs: data.jobId } });
            }
            return res.status(200).json({
                errorStatus: false,
                message: 'Delete job successfully',
            });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: e.message,
            });
        }
    }

    async update(req, res) {
        try {
            if (req.body.job.jobId) {
                const job = await Job.findById(req.body.job.jobId);
                const company = await Company.findById(req.body.companyId);
                if (job?.company.toString() !== req.body.companyId) {
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This job not owned for this company',
                    });
                }
                if (company?.user.toString() !== req.body.userId)
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This company not owned for you',
                    });
                await job.updateOne({
                    $set: {
                        name: req.body.job.jobName,
                        categories: req.body.job.jobCategories,
                        level: req.body.job.jobLevel,
                        required: req.body.job.jobRequired,
                        salary: req.body.job.jobSalary,
                        location: req.body.job.jobLocation,
                        description: req.body.job.jobDescription,
                        photo: req.body.job.jobPhoto,
                    },
                });

                return res.status(200).json({
                    errorStatus: false,
                    message: 'Updated job successfully',
                });
            }
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: e.message,
            });
        }
    }
}

module.exports = new jobController();
