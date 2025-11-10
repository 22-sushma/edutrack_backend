const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses } = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');



// Only faculty and admin can create courses
router.post('/', auth, authorize('faculty', 'admin'), createCourse);


// All authenticated users can view courses
router.get('/', auth, getAllCourses);

module.exports = router;
