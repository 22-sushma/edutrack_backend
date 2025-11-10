const { Course } = require('../models');

exports.createCourse = async (req, res) => {
  try {
    const { title, code, department } = req.body;
    const facultyId = req.user.id; // assuming logged-in faculty

    const course = await Course.create({ title, code, department, facultyId });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};