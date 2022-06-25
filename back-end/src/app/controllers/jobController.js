const { Job, Company } = require('../models/Company');

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
}

module.exports = new jobController();
