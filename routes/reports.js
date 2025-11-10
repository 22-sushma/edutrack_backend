const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const reportsController = require('../controllers/reportsController');

router.get('/student/:studentId', auth, reportsController.studentReport);
router.get('/course/:courseId', auth, reportsController.courseReport);
router.get('/attendance', auth, reportsController.attendanceReport);

module.exports = router;
