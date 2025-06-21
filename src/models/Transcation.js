const TransactionSchema = new mongoose.Schema({
  transactionId: String,
  amount: Number,
  type: String,
  date: Date,
  status: String
});
module.exports = mongoose.model('Transaction', TransactionSchema);
