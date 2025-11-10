module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Department = sequelize.define('Department', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, { tableName: 'department', timestamps: false });
  return Department;
};
