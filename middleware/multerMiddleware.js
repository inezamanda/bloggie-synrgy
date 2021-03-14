require('dotenv').config();

const multer = require(`multer`);

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
        console.log(file);
        callback(null, new Date().toString() + '-' + file.originalname);
    }
});

const imageFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: imageFilter });

module.exports = upload;
