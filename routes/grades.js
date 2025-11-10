const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const gradesController = require('../controllers/gradesController');

router.post('/', auth, requireRole('faculty','admin'), gradesController.enterGrade);
router.get('/enrollment/:enrollmentId', auth, gradesController.byEnrollment);

module.exports = router;
