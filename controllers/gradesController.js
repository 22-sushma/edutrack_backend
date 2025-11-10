const { Grade, Enrollment } = require('../models');

exports.enterGrade = async (req, res) => {
  try {
    const { enrollment_id, grade_value, grade_point, remarks } = req.body;
    // In production, check faculty owns the course
    const g = await Grade.create({ enrollment_id, grade_value, grade_point, remarks });
    res.status(201).json(g);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.byEnrollment = async (req, res) => {
  const grades = await Grade.findAll({ where: { enrollment_id: req.params.enrollmentId } });
  res.json(grades);
};
