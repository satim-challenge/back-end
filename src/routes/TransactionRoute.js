const transactionController = require('../controllers/transactionController');
router.post('/process', transactionController.process);
router.get('/predict', transactionController.predictNext);
