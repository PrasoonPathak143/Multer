const express = require('express');
const app = express();
const userModel = require('./models/user-model');
const upload = require('./multer-setup');
const sharp = require('sharp');
// form type must be multipart/form-data to use multer

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  let buf = await sharp(req.file.buffer).resize(1920, 1080).toBuffer();   // resizing image to reduce file size
  let user = await userModel.create({
    name: "Krishna",
    username: "krishna",
    // image: req.file.filename                     this was there for disk storage as we need only string
    image: buf                          // now we are storing image in database
  });
  console.log(Buffer.byteLength(buf));
  console.log(req.file.size);
  res.send(user);
});

app.get("/show", async (req, res)=> {
  let files = await userModel.find(); 
  res.render("show", {files});
})

app.listen(3000);