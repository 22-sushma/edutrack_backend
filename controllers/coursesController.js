const { Course, User } = require('../models');

exports.createCourse = async (req, res) => {
  const { code, title, description, credits, department_id } = req.body;
  try {
    const course = await Course.create({ code, title, description, credits, department_id, faculty_id: req.user.id });
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.list = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};

exports.getById = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  res.json(course);
};
