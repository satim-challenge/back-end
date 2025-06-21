const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phone: String,
  faceData: Buffer
});

module.exports = mongoose.model('User', UserSchema);
