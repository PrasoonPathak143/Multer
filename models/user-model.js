const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MulterDB');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  // image: String  this was used when we were storing image name in database
  image: Buffer  // now we are storing image in database
});

module.exports = mongoose.model('User', userSchema);