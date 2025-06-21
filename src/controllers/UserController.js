const User = require('../models/User');

exports.login = async (req, res) => {
  // dummy login logic
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) res.send("Logged in");
  else res.status(401).send("Not found");
};

exports.authenticate = async (req, res) => {
  // dummy face match simulation
  res.send("User authenticated with face");
};
