module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    enrollment_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    year: { type: DataTypes.INTEGER, defaultValue: 1 }
  }, { tableName: 'students', timestamps: false });
  return Student;
};
