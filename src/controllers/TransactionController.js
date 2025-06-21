const Transaction = require('../models/Transaction');
exports.process = async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.send('Transaction processed');
};
exports.predictNext = (req, res) => {
  res.send('Prediction logic here');
};
