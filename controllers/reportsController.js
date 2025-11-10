const { Grade, Enrollment, Course, Student, Attendance, User } = require('../models');
const { Sequelize } = require('sequelize');

exports.studentReport = async (req, res) => {
  const studentId = req.params.studentId;
  // aggregate grades per course
  const enrolls = await Enrollment.findAll({ where: { student_id: studentId } });
  const report = [];
  for (const e of enrolls) {
    const grades = await Grade.findAll({ where: { enrollment_id: e.id } });
    const avg = grades.length ? (grades.reduce((s,g)=>s+parseFloat(g.grade_point||0),0)/grades.length).toFixed(2) : null;
    const course = await Course.findByPk(e.course_id);
    report.push({ course: course ? course.title : null, enrollment: e, average_grade_point: avg, grades });
  }
  res.json({ studentId, report });
};

exports.courseReport = async (req, res) => {
  const courseId = req.params.courseId;
  const enrolls = await Enrollment.findAll({ where: { course_id: courseId } });
  const studentCount = enrolls.length;
  const grades = await Grade.findAll({ where: { enrollment_id: enrolls.map(e=>e.id) } });
  const avg = grades.length ? (grades.reduce((s,g)=>s+parseFloat(g.grade_point||0),0)/grades.length).toFixed(2) : null;
  res.json({ courseId, studentCount, average_grade_point: avg });
};

exports.attendanceReport = async (req, res) => {
  const { from, to, courseId } = req.query;
  // basic implementation
  const where = {};
  if (from && to) where.recorded_at = { [Sequelize.Op.between]: [new Date(from), new Date(to)] };
  const list = await Attendance.findAll({ where });
  res.json({ count: list.length, records: list });
};
