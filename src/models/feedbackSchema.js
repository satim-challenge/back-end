const FeedbackSchema = new mongoose.Schema({
  feedbackId: String,
  rating: Number,
  comment: String
});
module.exports = mongoose.model('Feedback', FeedbackSchema);
