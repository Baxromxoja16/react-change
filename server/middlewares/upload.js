const multer = require('multer');
const moment = require('moment');
const path = require('path');
const shell = require('shelljs');

const allowedType = ['image/jpg', 'image/png', 'image/jpeg'];

function fileFilter(req, file, cb) {
    if (allowedType.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    };
};

module.exports = (dest) => {
    const filePath = path.join(__dirname, '..', 'public', 'uploads', dest);
    const random = () => Math.floor(Math.random() * 99999);
    shell.mkdir('-p', filePath);

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, filePath);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = moment().format('DD-MM-YYYY_HH-mm-ss') + '-' + random() + '-' + file.originalname;
            cb(null, uniqueSuffix);
        }
    });

    return multer({
        storage,
        fileFilter
    })
};