const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const attendanceController = require('../controllers/attendanceController');

router.post('/', auth, requireRole('faculty','admin'), attendanceController.record);
router.get('/enrollment/:enrollmentId', auth, attendanceController.byEnrollment);

module.exports = router;
