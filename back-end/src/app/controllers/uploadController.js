const { cloudinary } = require('../../utils/cloudinary');
const fs = require('fs');

class uploadController {
    async image(req, res) {
        try {
            const uploadResponse = await cloudinary.uploader.upload(
                req.files.upload.path,
                {
                    upload_preset: 'rvswxotu',
                },
            );
            console.log(uploadResponse);
            fs.unlink(req.files.upload.path, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
            });
            res.status(200).json({ uploaded: true, url: uploadResponse.url });
        } catch (e) {
            console.log(e);
            res.status(500).json({ errorStatus: true, errorMessage: e });
        }
    }
}

module.exports = new uploadController();
