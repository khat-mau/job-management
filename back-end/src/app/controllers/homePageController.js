const { Company, Job } = require('../models/Company');

class homePageController {
    async homePage(req, res) {
        try {
            const typeListJob = req.params.typeList;
            let listJob;
            if(typeListJob == 'All'){ listJob = await Job.find(); }

            else if(typeListJob == 'JobBySpeciation'){
                listJob = await Job.find();
            }

            else if(typeListJob == 'Part-Time'){}
            else if(typeListJob == 'GeneralLabor'){}
            const companyList = await Company.find().sort({createdAt: -1});
            
            res.status(200).json({ errorStatus: false, jobList: listJob, companyList: companyList });
        }
        catch (e) {
            res.status(500).json({ errorStatus: true, message: 'find job failed: ' + e.message });
        }

    }
}

module.exports = new homePageController();