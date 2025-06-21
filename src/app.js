const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const biometricRoutes = require('./routes/biometricRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

// Middleware for parsing JSON
app.use(express.json());

// Logging and CORS
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/biometric', biometricRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/feedback', feedbackRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('🚀 Nesrine lCute API is running');
});

module.exports = app;
