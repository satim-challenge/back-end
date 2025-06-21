const fs = require('fs');
const path = require('path');
const Transaction = require('../models/Transaction');
const ml = require('ml-regression');
const SLR = ml.SLR;

/**
 * Trains and saves a forecast model for a user
 * @param {String} userId - the ID of the user
 */
const trainAndSaveModel = async (userId) => {
  try {
    // 1. Fetch completed transactions sorted by date
    const transactions = await Transaction.find({ userId, status: 'completed' }).sort({ date: 1 });

    if (transactions.length < 3) {
      console.log(` Not enough data to train model for user ${userId}`);
      return;
    }

    // 2. Prepare training data
    const X = transactions.map(tx => new Date(tx.date).getTime());
    const y = transactions.map(tx => tx.amount);

    // 3. Train a simple linear regression model
    const model = new SLR(X, y);

    // 4. Save model to file (just save slope and intercept)
    const modelData = {
      slope: model.slope,
      intercept: model.intercept
    };

    const modelPath = path.join(__dirname, `../models_cache/model_${userId}.json`);
    fs.writeFileSync(modelPath, JSON.stringify(modelData));

    console.log(` Model saved for user ${userId} at ${modelPath}`);
  } catch (error) {
    console.error(` Error training model for user ${userId}:`, error.message);
  }
};

module.exports = trainAndSaveModel;
