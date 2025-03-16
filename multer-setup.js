const multer = require('multer');

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
const upload = multer({ storage: storage });

module.exports = upload;