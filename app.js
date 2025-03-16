const express = require('express');
const app = express();
const userModel = require('./models/user-model');
const upload = require('./multer-setup');
// form type must be multipart/form-data to use multer

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  let user = await userModel.create({
    name: "Krishna",
    username: "krishna",
    // image: req.file.filename                     this was there for disk storage as we need only string
    image: req.file.buffer                          // now we are storing image in database
  });
  console.log(req.file);
  res.send(user);
});

app.get("/show", async (req, res)=> {
  let files = await userModel.find(); 
  res.render("show", {files});
})

app.listen(3000);