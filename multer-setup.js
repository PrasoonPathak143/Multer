const multer = require('multer');
const path = require('path');

// for disk storage

// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './public/images/uploads');  // location to upload file
//     },
//     filename: function(req, file, cb){
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         cb(null, file.originalname + '-' + uniqueSuffix + path.extname(file.originalname));  // file name
//     }
// });


// for memory storage

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
    const types = [".jpg", ".jpeg", ".png"];
    const ext = path.extname(file.originalname);
    if (types.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed"), false);
    }   
}

// can pass the filefilter and limits as options to upload
const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 * 1024 * 10 } });

module.exports = upload;