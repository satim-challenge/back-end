const NotificationSchema = new mongoose.Schema({
  notifId: String,
  type: String,
  message: String
});
module.exports = mongoose.model('Notification', NotificationSchema);
