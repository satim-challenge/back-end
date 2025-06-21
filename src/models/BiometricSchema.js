const BiometricSchema = new mongoose.Schema({
  authId: String,
  method: String
});
module.exports = mongoose.model('BiometricAuth', BiometricSchema);
