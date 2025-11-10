const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize);
const Student = require('./student')(sequelize);
const Department = require('./department')(sequelize);
const Course = require('./course')(sequelize);
const Enrollment = require('./enrollment')(sequelize);
const Grade = require('./grade')(sequelize);
const Attendance = require('./attendance')(sequelize);

User.hasOne(Student, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Student.belongsTo(User, { foreignKey: 'user_id' });

Department.hasMany(User, { foreignKey: 'department_id' });
Course.belongsTo(Department, { foreignKey: 'department_id' });

Course.belongsTo(User, { as: 'faculty', foreignKey: 'faculty_id' });
Enrollment.belongsTo(Student, { foreignKey: 'student_id' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id' });

Grade.belongsTo(Enrollment, { foreignKey: 'enrollment_id' });
Attendance.belongsTo(Enrollment, { foreignKey: 'enrollment_id' });

module.exports = {
  sequelize,
  Sequelize,
  User, Student, Department, Course, Enrollment, Grade, Attendance
};
