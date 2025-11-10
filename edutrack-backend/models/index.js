'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// User-Course (faculty teaches courses)
db.User.hasMany(db.Course, { foreignKey: 'facultyId' });
db.Course.belongsTo(db.User, { foreignKey: 'facultyId' });

// Student-Course (students enroll in courses)
db.User.belongsToMany(db.Course, {
  through: db.Enrollment,
  foreignKey: 'studentId',
  otherKey: 'courseId'
});
db.Course.belongsToMany(db.User, {
  through: db.Enrollment,
  foreignKey: 'courseId',
  otherKey: 'studentId'
});

// Grades and Attendance
db.User.hasMany(db.Grade, { foreignKey: 'studentId' });
db.Course.hasMany(db.Grade, { foreignKey: 'courseId' });

db.User.hasMany(db.Attendance, { foreignKey: 'studentId' });
db.Course.hasMany(db.Attendance, { foreignKey: 'courseId' });

module.exports = db;
