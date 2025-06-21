const chatbotController = require('../controllers/chatbotController');
router.get('/start', chatbotController.startChat);
router.get('/guide', chatbotController.guideUser);
