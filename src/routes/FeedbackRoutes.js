const feedbackController = require('../controllers/feedbackController');
router.post('/submit', feedbackController.submit);