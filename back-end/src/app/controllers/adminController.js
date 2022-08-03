const { Company, Job } = require('../models/Company');

class adminController {
    async requests(req, res) {
        try {
            const companies = await Company.find({ status: 'waiting' });
            const jobs = await Job.find({ status: 'waiting' });

            res.status(200).json({
                errorStatus: false,
                data: { companies, jobs },
            });
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async viewDetailRequest(req, res) {
        try {
            const companies = await Company.findById(req.body.id);
            if (companies) {
                return res.status(200).json({
                    errorStatus: false,
                    category: 'company',
                    data: companies,
                });
            } else {
                const jobs = await Job.findById(req.body.id);
                if (jobs)
                    return res.status(200).json({
                        errorStatus: false,
                        category: 'job',
                        data: jobs,
                    });
            }
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async acceptRequest(req, res) {
        try {
            const id = req.body.id;
            const company = await Company.findById(id);
            if (company) {
                company.status = 'show';
                company
                    .save()
                    .then(() =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Ok' }),
                    );
            } else {
                const job = await Job.findById(id);
                if (job) {
                    job.status = 'show';
                    job.save().then(() =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Ok' }),
                    );
                }
            }
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async rejectRequest(req, res) {
        try {
            const id = req.body.id;
            const company = await Company.findById(id);
            if (company) {
                company.status = 'banned';
                company
                    .save()
                    .then(() =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Ok' }),
                    );
            } else {
                const job = await Job.findById(id);
                if (job) {
                    job.status = 'banned';
                    job.save().then(() =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Ok' }),
                    );
                }
            }
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }
}

module.exports = new adminController();
