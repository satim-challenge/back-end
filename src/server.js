require('dotenv').config();
const connectDB = require('../db'); // MongoDB connection
const app = require('./app');
// Connect to DB
connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
