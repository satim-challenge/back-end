const fs = require('fs');
const path = require('path');
const SLR = require('ml-regression').SLR;


const Transaction = require('../models/Transaction');
exports.process = async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.send('Transaction processed');
};
exports.predictNext = (req, res) => {
  res.send('Prediction logic here');
};



exports.forecastSpending =(req, res) => {
  try {
    const { userId } = req.params;
    const modelPath = path.join(__dirname, `../models_cache/model_${userId}.json`);

    if (!fs.existsSync(modelPath)) {
      return res.status(404).json({ message: "Model not trained yet for this user." });
    }

    const { slope, intercept } = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

    const model = new SLR([0], [0]); // dummy to init
    model.slope = slope;
    model.intercept = intercept;

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const futureX = futureDate.getTime();

    const predicted = model.predict(futureX);

    res.json({
      message: "Prediction success",
      forecastDate: futureDate.toISOString(),
      predictedAmount: predicted.toFixed(2)
    });

  } catch (error) {
    res.status(500).json({ message: "Prediction failed", error: error.message });
  }
};

