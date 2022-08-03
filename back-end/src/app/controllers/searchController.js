const { Job, Company } = require('../models/Company');

class searchController {
    async any(req, res) {
        const limit = 5;
        const filter =
            req.query.filter === 'All Cities' || !req.query.filter
                ? ''
                : req.query.filter;

        try {
            let companyNameData;
            const promiseCompanyNameData = new Promise((resolve) =>
                resolve(
                    Company.find({
                        name: {
                            $regex: req.query.searchData, // search with includes
                            $options: 'i', // without distinction case
                        },
                    })
                        .populate('jobs')
                        .sort({ name: 1 })
                        .limit(limit),
                ),
            );

            let jobNameData;
            const promiseJobNameData = new Promise((resolve) =>
                resolve(
                    Job.find({
                        name: {
                            $regex: req.query.searchData, // search with includes
                            $options: 'i', // without distinction case
                        },
                        status: "hide",
                        location: {
                            $regex: filter, // search with includes
                            $options: 'i', // without distinction case
                        },
                    })
                        .sort({ name: 1 })
                        .limit(limit),
                ),
            );

            let jobSalaryData = [];
            const promiseJobSalaryData = new Promise((resolve) => {
                if (!isNaN(req.query.searchData)) {
                    resolve(
                        Job.find({
                            salary: {
                                $regex: req.query.searchData, // search with includes
                                $options: 'i', // without distinction case
                            },
                            location: {
                                $regex: filter, // search with includes
                                $options: 'i', // without distinction case
                            },
                            status: "hide",
                        })
                            .sort({ name: 1 })
                            .limit(limit),
                    );
                } else {
                    resolve([]);
                }
            });

            let jobLevelData;
            const promiseJobLevelData = new Promise((resolve) =>
                resolve(
                    Job.find({
                        level: {
                            $regex: req.query.searchData, // search with includes
                            $options: 'i', // without distinction case
                        },
                        location: {
                            $regex: filter, // search with includes
                            $options: 'i', // without distinction case
                        },
                        status: "hide",
                    })
                        .sort({ name: 1 })
                        .limit(limit),
                ),
            );

            let jobCategoriesData;
            const promiseJobCategoriesData = new Promise((resolve) =>
                resolve(
                    Job.find({
                        categories: {
                            $regex: req.query.searchData, // search with includes
                            $options: 'i', // without distinction case
                        },
                        location: {
                            $regex: filter, // search with includes
                            $options: 'i', // without distinction case
                        },
                        status: "hide",
                    })

                        .sort({ name: 1 })
                        .limit(limit),
                ),
            );

            let jobRequiredData;
            const promiseJobRequiredData = new Promise((resolve) =>
                resolve(
                    Job.find({
                        required: {
                            $regex: req.query.searchData, // search with includes
                            $options: 'i', // without distinction case
                        },
                        location: {
                            $regex: filter, // search with includes
                            $options: 'i', // without distinction case
                        },
                    })

                        .sort({ name: 1 })
                        .limit(limit),
                ),
            );

            await Promise.all([
                promiseCompanyNameData,
                promiseJobNameData,
                promiseJobSalaryData,
                promiseJobLevelData,
                promiseJobCategoriesData,
                promiseJobRequiredData,
            ]).then(
                ([result1, result2, result3, result4, result5, result6]) => {
                    // show company that contains at least 1 job, this job filter by location field.
                    companyNameData = result1.filter((element) => {
                        element.jobs = element.jobs.filter((job) =>
                            !job.location || job.location.includes(filter)
                                ? true
                                : false,
                        );
                        return element.jobs.length === 0 ? false : true;
                    });
                    //
                    jobNameData = result2;
                    jobSalaryData = result3;
                    jobLevelData = result4;
                    jobCategoriesData = result5;
                    jobRequiredData = result6;
                },
            );

            res.status(200).json({
                errorStatus: false,
                data: {
                    companyNameData,
                    jobNameData,
                    jobSalaryData,
                    jobLevelData,
                    jobCategoriesData,
                    jobRequiredData,
                },
            });
        } catch (e) {
            res.status(500).json({ errorStatus: true, message: e.message });
        }
    }
}

module.exports = new searchController();
