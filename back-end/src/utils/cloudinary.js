//require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dwz7hut39', //process.env.CLOUDINARY_USER_NAME,
    api_key: '245584767942564', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'LpkEsxxtqrJbC5wC9km3rEltTI0', //process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
