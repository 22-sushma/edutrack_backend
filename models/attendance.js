module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Attendance = sequelize.define('Attendance', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    enrollment_id: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.ENUM('present','absent','late'), allowNull: false },
    recorded_at: { type: DataTypes.DATE, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { tableName: 'attendance', timestamps: false });
  return Attendance;
};
