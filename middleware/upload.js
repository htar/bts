const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, next) {
        next(null, 'public/');
    },
    filename(req, file, next) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        next(null, `${date}-${file.originalname}`);
    }
});

const fileFilter = (req, file, next) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        next(null, true);
    } else {

        next(null, true);
    }
};

const limits = {
    fileSize: 1024 * 1024 * 5
};

module.exports = multer({
    storage,
    fileFilter,
    limits
});