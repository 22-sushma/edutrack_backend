const { Enrollment, Student, Course } = require('../models');

exports.enroll = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;
    // if student role, ensure they can only enroll themselves
    if (req.user.role === 'student') {
      const student = await Student.findOne({ where: { user_id: req.user.id } });
      if (!student || student.id !== Number(student_id)) return res.status(403).json({ message: 'Forbidden' });
    }
    const exists = await Enrollment.findOne({ where: { student_id, course_id } });
    if (exists) return res.status(409).json({ message: 'Already enrolled' });
    const e = await Enrollment.create({ student_id, course_id });
    res.status(201).json(e);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.byStudent = async (req, res) => {
  const enrolls = await Enrollment.findAll({ where: { student_id: req.params.studentId } });
  res.json(enrolls);
};
