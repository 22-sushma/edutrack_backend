const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const coursesController = require('../controllers/coursesController');

router.post('/', auth, requireRole('faculty','admin'), coursesController.createCourse);
router.get('/', auth, coursesController.list);
router.get('/:id', auth, coursesController.getById);

module.exports = router;
