module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Course = sequelize.define('Course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    credits: { type: DataTypes.INTEGER, defaultValue: 3 },
    department_id: { type: DataTypes.INTEGER },
    faculty_id: { type: DataTypes.INTEGER }
  }, { tableName: 'courses', timestamps: false });
  return Course;
};
