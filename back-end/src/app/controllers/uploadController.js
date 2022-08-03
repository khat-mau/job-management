const { cloudinary } = require('../../utils/cloudinary');

class uploadController {
    async image(req, res) {
        try {
            const fileStr = req.body.data;
            const uploadResponse = await cloudinary.uploader.upload(fileStr, {
                upload_preset: 'dev_setups',
            });
            console.log(uploadResponse);
        } catch (e) {
            console.log(e);
            res.status(500).json({ errorStatus: true, errorMessage: e });
        }
    }
}

module.exports = new uploadController();