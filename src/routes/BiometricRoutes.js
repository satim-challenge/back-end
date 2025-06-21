const biometricController = require('../controllers/biometricController');
router.get('/scan', biometricController.scanFace);
router.get('/verify', biometricController.verifyUser);
