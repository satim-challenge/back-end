const notificationController = require('../controllers/notificationController');
router.post('/alert', notificationController.sendAlert);
