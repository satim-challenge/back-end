const dashboardController = require('../controllers/dashboardController');
router.get('/stats', dashboardController.showStats);
router.get('/recommend', dashboardController.recommendations);
