const { Company } = require('../models/Company');

class companyController {
    async create(req, res) {
        try {
            const data = { ...req.body };
            data.status = 'hide';
            const newCompany = new Company(req.body);
            const savedCompany = await newCompany.save();
            res.status(200).json({
                errorStatus: false,
                message: 'Create company successfully',
            });
        } catch (error) {
            res.status(500).json({
                errorStatus: true,
                error,
                message: 'Create company failed',
            });
        }
    }
}

module.exports = new companyController();
