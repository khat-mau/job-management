const { Company, Job } = require('../models/Company');
const user = require('../models/User');
const { cloudinary } = require('../../utils/cloudinary');
const User = require('../models/User');

class companyController {
    async create(req, res) {
        try {
            const data = { ...req.body };
            data.status = 'waiting';
            if (!data.photo || !data.name || !data.description)
                return res.status(400).json({
                    errorStatus: true,
                    message: 'All fields must be required.',
                });
            const companiesUser = await user
                .findById(data.userId)
                .populate('companies');
            for (let c = 0; c < companiesUser.companies.length; c++) {
                if (
                    companiesUser.companies[c].status === 'waiting' ||
                    companiesUser.companies[c].status === 'banned'
                ) {
                    return res.status(400).json({
                        errorStatus: true,
                        message:
                            'You have one or more companies have waiting or banned status.',
                    });
                }
            }

            const uploadResponse = await cloudinary.uploader.upload(
                data.photo,
                {
                    upload_preset: 'rvswxotu',
                },
            );
            data.photo = uploadResponse.url;
            const newCompany = new Company({ ...data, user: data.userId });
            if (data.userId) {
                const savedCompany = await newCompany.save();
                const user = User.findById(data.userId);
                await user.updateOne({
                    $push: { companies: savedCompany._id },
                });
            } else {
                return res.status(400).json({
                    errorStatus: true,
                    message: 'Request must have user id.',
                });
            }

            res.status(200).json({
                errorStatus: false,
                message: 'Create company successfully',
            });
        } catch (error) {
            res.status(500).json({
                errorStatus: true,
                error,
                message: 'Something wrong, create company failed',
            });
        }
    }

    async listCompany(req, res) {
        try {
            let perpage = 6;
            let page = req.params.page || 1;
            let listCompany;
            let listCompanyWasFilter;
            const promises1 = new Promise((resolve) =>
                resolve(Company.countDocuments({})),
            );
            const promises2 = new Promise((resolve) =>
                resolve(
                    Company.find()
                        .skip(perpage * page - perpage)
                        .limit(perpage),
                ),
            );
            await Promise.all([promises1, promises2]).then(
                ([result1, result2]) => {
                    listCompany = result1;
                    listCompanyWasFilter = result2;
                },
            );
            const toltalPage =
                listCompany % perpage === 0
                    ? listCompany / perpage
                    : parseInt(listCompany / perpage) + 1;
            res.status(200).json({
                errorStatus: false,
                data: { page, toltalPage, listCompanyWasFilter },
            });
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async listMyCompany(req, res) {
        try {
            const id = req.body.userId;
            const result = await Company.find({ user: id });
            res.status(200).json({ errorStatus: false, data: result });
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async findJobsInOwnCompany(req, res) {
        try {
            const userId = req.body.userId;
            const companyId = req.body.companyId;
            const result = await Company.findById(companyId).populate({
                path: 'jobs',
                populate: { path: 'rates' },
            });
            if (userId !== result.user.toString())
                return res.status(400).json({
                    errorStatus: true,
                    message: 'This company does not own to you',
                });
            res.status(200).json({ errorStatus: false, data: result });
        } catch (error) {
            res.status(500).json({ errorStatus: true, message: error.message });
        }
    }

    async update(req, res) {
        try {
            if (req.body.companyId) {
                const company = await Company.findById(req.body.companyId);
                if (company?.user.toString() !== req.body.userId) {
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This company not owned for you',
                    });
                }

                await company.updateOne({
                    $set: {
                        name: req.body.companyName,
                        photo: req.body.companyPhoto,
                        description: req.body.companyDescription,
                    },
                });
            }

            res.status(200).json({
                errorStatus: false,
                message: 'Updated successfully!',
            });
        } catch (error) {
            res.status(500).json({
                errorStatus: true,
                message: error.message,
            });
        }
    }
    async delete(req, res) {
        try {
            const data = { ...req.body };
            if (data.companyId) {
                const company = await Company.findById(data.companyId);

                if (company?.user.toString() !== data?.userId)
                    return res.status(400).json({
                        errorStatus: true,
                        message: 'This company not owned for you',
                    });
                await Company.delete({ _id: data.companyId });
                await User.findByIdAndUpdate(data.userId, {
                    $pull: { companies: data.companyId },
                });
            }
            return res.status(200).json({
                errorStatus: false,
                message: 'Delete company successfully',
            });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: e.message,
            });
        }
    }

    async changeShowHideCompany(req, res) {
        try {
            const company = await Company.findById(req.body.companyId);
            if (company?.user.toString() !== req.body.userId)
                return res.status(400).json({
                    errorStatus: true,
                    message: 'This company not owned for you.',
                });
            if (company.status === 'hide') {
                company.status = 'show';
                company
                    .save()
                    .then((data) =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Change!' }),
                    );
            } else if (company.status === 'show') {
                company.status = 'hide';
                company
                    .save()
                    .then((data) =>
                        res
                            .status(200)
                            .json({ errorStatus: false, message: 'Change!' }),
                    );
            }
        } catch (error) {
            res.status(500).json({
                errorStatus: true,
                message: error.message,
            });
        }
    }

    async listJobFromCompany(req, res) {
        try {
            // truyền companyID
            const listJobInCompany = await Job.find({
                company: req.params.id,
                status: 'show',
            }).populate({ path: 'company', select: ['name'] });
            res.status(200).json({
                errorStatus: false,
                data: listJobInCompany,
            });
        } catch (e) {
            res.status(500).json({
                errorStatus: true,
                message: 'find job failed',
                e,
            });
        }
    }
}
module.exports = new companyController();
