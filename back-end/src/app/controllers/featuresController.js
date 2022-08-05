const { Rate } = require('../models/Features');
const { Company, Job } = require('../models/Company');
const User = require('../models/User');

class featuresController {
    async submitRate(req, res) {
        try {
            const data = { ...req.body };

            const job = await Job.findById(data.jobId).populate('rates');
            const user = await User.findById(data.userId).populate('rate');
            let check = false;
            for (let i = 0; i < job.rates.length; i++) {
                console.log(job.rates[i].user.toString());
                if (job.rates[i].user.toString() === data.userId) {
                    check = true;
                    break;
                }
            }

            const rate = new Rate({
                value: data.value,
                user: data.userId,
                job: data.jobId,
            });
            const saveRate = await rate.save();
            if (check) {
                await job.updateOne({ $set: { rates: saveRate._id } });
                await user.updateOne({ $set: { rate: saveRate._id } });
                res.status(200).json({
                    errorStatus: false,
                    message: 'Update rate success',
                });
            } else {
                await job.updateOne({ $push: { rates: saveRate._id } });
                await user.updateOne({ $push: { rate: saveRate._id } });
                res.status(200).json({
                    errorStatus: false,
                    message: 'Post success',
                });
            }
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }
}

module.exports = new featuresController();
