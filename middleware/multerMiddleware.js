require('dotenv').config();

const multer = require(`multer`);
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../files"));
    },
    filename: (req, file, callback) => {
        console.log(file);
        callback(null, new Date().toString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

module.exports = upload;
