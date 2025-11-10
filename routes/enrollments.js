const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const enrollmentsController = require('../controllers/enrollmentsController');

router.post('/', auth, requireRole('student','admin'), enrollmentsController.enroll);
router.get('/student/:studentId', auth, enrollmentsController.byStudent);

module.exports = router;
