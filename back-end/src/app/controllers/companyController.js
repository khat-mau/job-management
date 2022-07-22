const { Company } = require('../models/Company');
const user = require('../models/User');
const { cloudinary } = require('../../utils/cloudinary');
const User = require('../models/User');
class companyController {
    async create(req, res) {
        try {
            const data = { ...req.body };
            data.status = 'hide';
            if (!data.photo || !data.name || !data.description)
                return res.status(400).json({
                    errorStatus: true,
                    message: 'All fields must be required.',
                });
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
}

module.exports = new companyController();
