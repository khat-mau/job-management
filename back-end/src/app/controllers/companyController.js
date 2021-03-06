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

    async listCompany(req, res) {
        try {
            console.log(req.params.page);
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
}

module.exports = new companyController();
