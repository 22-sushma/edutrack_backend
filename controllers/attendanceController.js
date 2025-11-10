const { Attendance } = require('../models');

exports.record = async (req, res) => {
  try {
    const { enrollment_id, status, recorded_at } = req.body;
    const a = await Attendance.create({ enrollment_id, status, recorded_at });
    res.status(201).json(a);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.byEnrollment = async (req, res) => {
  const list = await Attendance.findAll({ where: { enrollment_id: req.params.enrollmentId } });
  res.json(list);
};
