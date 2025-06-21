const ChatbotSchema = new mongoose.Schema({
  chatbotId: String
});
module.exports = mongoose.model('Chatbot', ChatbotSchema);
