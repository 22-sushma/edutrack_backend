const { User, Student } = require('../models');

exports.me = async (req, res) => {
  const user = await User.findByPk(req.user.id, { include: [{ model: Student }] });
  res.json(user ? user.toJSON() : null);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { include: [{ model: Student }] });
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user.toJSON());
};
