module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Grade = sequelize.define('Grade', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    enrollment_id: { type: DataTypes.INTEGER, allowNull: false },
    grade_value: { type: DataTypes.STRING },
    grade_point: { type: DataTypes.DECIMAL(4,2) },
    remarks: { type: DataTypes.STRING },
    graded_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { tableName: 'grades', timestamps: false });
  return Grade;
};
